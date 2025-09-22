#!/bin/bash

# Script de deploy para o servidor de portfolio
# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Iniciando Deploy do Portfolio ===${NC}"

# 1. Criar redes Docker se não existirem
echo -e "${YELLOW}Criando redes Docker...${NC}"
docker network create omd-network 2>/dev/null || echo "Rede omd-network já existe"
docker network create alura-tecboard 2>/dev/null || echo "Rede alura-tecboard já existe"

# 2. Deploy da aplicação OMD
echo -e "${YELLOW}Fazendo deploy do OMD Plano de Ação...${NC}"
cd ~/omd-plano-de-acao
docker-compose down
docker-compose up -d --build
cd ~

# 3. Deploy da aplicação Tecboard
echo -e "${YELLOW}Fazendo deploy do Alura Tecboard...${NC}"
cd ~/alura-tecboard
docker-compose down
docker-compose up -d --build
cd ~

# 4. Verificar se os certificados já existem
if [ ! -d "./certbot-data/live/planoacao.portfolio.ivansantos.dev" ] || [ ! -d "./certbot-data/live/tecboard.portfolio.ivansantos.dev" ]; then
    echo -e "${YELLOW}Certificados não encontrados. Obtendo certificados...${NC}"
    
    # Criar configuração temporária do Nginx apenas para validação
    cat > ./nginx/nginx-temp.conf << 'EOF'
server {
    listen 80;
    server_name planoacao.portfolio.ivansantos.dev tecboard.portfolio.ivansantos.dev;
    
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
    
    location / {
        return 404;
    }
}
EOF
    
    # Iniciar Nginx temporário
    docker run -d --name nginx-temp \
        -p 80:80 \
        -v ./nginx/nginx-temp.conf:/etc/nginx/conf.d/default.conf \
        -v ./nginx/certbot/www:/var/www/certbot \
        nginx:latest
    
    sleep 5
    
    # Obter certificados
    docker-compose run --rm certbot
    
    # Parar Nginx temporário
    docker stop nginx-temp
    docker rm nginx-temp
    rm ./nginx/nginx-temp.conf
fi

# 5. Iniciar o proxy reverso principal
echo -e "${YELLOW}Iniciando proxy reverso...${NC}"
docker-compose down
docker-compose up -d nginx certbot-renew

# 6. Verificar status dos containers
echo -e "${GREEN}=== Status dos Containers ===${NC}"
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

# 7. Testar conectividade
echo -e "${GREEN}=== Testando Conectividade ===${NC}"
sleep 5

# Testar OMD
if curl -s -o /dev/null -w "%{http_code}" http://localhost | grep -q "301"; then
    echo -e "${GREEN}✓ Proxy reverso respondendo corretamente${NC}"
else
    echo -e "${RED}✗ Problema com o proxy reverso${NC}"
fi

echo -e "${GREEN}=== Deploy Completo ===${NC}"
echo -e "Acesse suas aplicações em:"
echo -e "  - https://planoacao.portfolio.ivansantos.dev"
echo -e "  - https://tecboard.portfolio.ivansantos.dev"