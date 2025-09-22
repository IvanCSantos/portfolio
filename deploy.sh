#!/bin/bash

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Iniciando Deploy do Portfolio ===${NC}\n"

# 1. Criar diretório nginx se não existir
echo -e "${YELLOW}[1/7] Criando estrutura de diretórios...${NC}"
mkdir -p ~/nginx/certbot/www
echo -e "${GREEN}✓ Diretórios criados${NC}\n"

# 2. Mover nginx.conf para o diretório correto (se existir na raiz)
echo -e "${YELLOW}[2/7] Organizando arquivo nginx.conf...${NC}"
if [ -f ~/nginx.conf ]; then
    mv ~/nginx.conf ~/nginx/nginx.conf
    echo -e "${GREEN}✓ Arquivo nginx.conf movido para ~/nginx/${NC}\n"
elif [ -f ~/nginx/nginx.conf ]; then
    echo -e "${GREEN}✓ Arquivo nginx.conf já está no local correto${NC}\n"
else
    echo -e "${RED}✗ Arquivo nginx.conf não encontrado!${NC}"
    echo -e "${RED}  Por favor, crie o arquivo ~/nginx/nginx.conf antes de continuar${NC}\n"
    exit 1
fi

# 3. Criar redes Docker se não existirem
echo -e "${YELLOW}[3/7] Criando redes Docker...${NC}"
docker network create omd-network 2>/dev/null && echo -e "${GREEN}✓ Rede omd-network criada${NC}" || echo -e "  Rede omd-network já existe"
docker network create alura-tecboard 2>/dev/null && echo -e "${GREEN}✓ Rede alura-tecboard criada${NC}" || echo -e "  Rede alura-tecboard já existe"
echo ""

# 4. Subir compose do OMD
echo -e "${YELLOW}[4/7] Deploy do OMD Plano de Ação...${NC}"
cd ~/omd-plano-de-acao
if [ -f docker-compose.yaml ] || [ -f docker-compose.yml ]; then
    docker compose down 2>/dev/null
    docker compose up -d --build
    echo -e "${GREEN}✓ OMD Plano de Ação deployed${NC}\n"
else
    echo -e "${RED}✗ docker-compose.yaml não encontrado em ~/omd-plano-de-acao${NC}\n"
fi

# 5. Subir compose do Tecboard
echo -e "${YELLOW}[5/7] Deploy do Alura Tecboard...${NC}"
cd ~/alura-tecboard
if [ -f docker-compose.yaml ] || [ -f docker-compose.yml ]; then
    docker compose down 2>/dev/null
    docker compose up -d --build
    echo -e "${GREEN}✓ Alura Tecboard deployed${NC}\n"
else
    echo -e "${RED}✗ docker-compose.yaml não encontrado em ~/alura-tecboard${NC}\n"
fi

# 6. Subir compose global (proxy reverso)
echo -e "${YELLOW}[6/7] Deploy do Proxy Reverso...${NC}"
cd ~
if [ -f docker-compose.yaml ] || [ -f docker-compose.yml ]; then
    docker compose down 2>/dev/null
    docker compose up -d
    echo -e "${GREEN}✓ Proxy Reverso deployed${NC}\n"
else
    echo -e "${RED}✗ docker-compose.yaml não encontrado em ~/${NC}\n"
    exit 1
fi

# 7. Verificar status dos containers
echo -e "${YELLOW}[7/7] Verificando status dos containers...${NC}"
sleep 3

echo -e "\n${GREEN}=== Status dos Containers ===${NC}"
docker ps --format "table {{.Names}}\t{{.Status}}" | grep -E "(proxy-reverso|certbot-manager|omd-|tecboard-)" || true

# Informações finais
echo -e "\n${GREEN}=== Deploy Completo ===${NC}"
echo -e "\nAguarde alguns minutos para os certificados serem gerados."
echo -e "Depois disso, acesse suas aplicações em:"
echo -e "  ${GREEN}→${NC} https://planoacao.portfolio.ivansantos.dev"
echo -e "  ${GREEN}→${NC} https://tecboard.portfolio.ivansantos.dev"
echo -e "\n${YELLOW}Dica:${NC} Para ver os logs do certbot: ${GREEN}docker logs certbot-manager${NC}"
echo -e "${YELLOW}Dica:${NC} Para ver os logs do nginx: ${GREEN}docker logs proxy-reverso${NC}"
echo -e "\nSe os certificados já foram gerados, reinicie o nginx:"
echo -e "  ${GREEN}docker restart proxy-reverso${NC}\n"