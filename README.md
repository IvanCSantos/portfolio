# Ivan Santos - Portfolio de desenvolvedor web

Olá, este é o projeto de meu portfolio de desenvolvedor web que você pode ver em: https://ivansantos.dev

## Deploy

### Estrutura de Pastas

O projeto segue a seguinte estrutura de diretórios, com o docker-compose.yaml do proxy reverso e os arquivos de configuração do Nginx na pasta raiz, e cada aplicação em seu próprio subdiretório:

```
├── alura-tecboard/
├── omd-plano-de-acao/
├── nginx/
│ ├── certbot/
│ │ └── www/
│ └── nginx.conf
├── certbot-data/
├── docker-compose.yaml
├── nginx.conf.initial
└── nginx.conf.full
```

#### Processo de Deploy

Siga os passos abaixo na ordem para garantir um deploy bem-sucedido.

Passo 1: Subir as Aplicações

Navegue até o diretório de cada aplicação e suba seus respectivos containers. Este passo é crucial, pois ele cria as redes Docker necessárias para o proxy reverso.

#### Navegue para o diretório de cada aplicação e execute o compose

```
cd ~/diretorio-da-aplicacao
docker compose up -d --build
```

Verifique se os containers estão rodando com o comando docker container ls.

Passo 2: Iniciar o Proxy Reverso (com configuração temporária HTTP)
Agora que as redes e os serviços das aplicações estão no ar, você pode iniciar o proxy reverso. Primeiro, use a configuração inicial do Nginx, que escuta apenas na porta 80 e é necessária para que o Certbot possa validar seus domínios.

#### Navegue de volta para a pasta raiz

```
cd ~
```

#### Copie a configuração inicial do Nginx para o volume

```
cp ~/nginx.conf.initial ~/nginx/nginx.conf
```

#### Suba os containers do proxy reverso e do certbot

```
docker compose up -d
```

Passo 3: Visualizar os Logs do Certbot
O container do Certbot irá iniciar e, graças à sua configuração, aguardará até que o Nginx esteja de pé antes de tentar a validação. A melhor forma de saber quando os certificados estiverem prontos é acompanhando os logs do Certbot em tempo real.

```
docker logs certbot-manager --follow
```

Procure por mensagens como Successfully received certificate.. Quando você vir esta mensagem para ambos os seus domínios, você pode prosseguir.

Passo 4: Atualizar a Configuração e Recarregar o Nginx
Após a emissão dos certificados, substitua a configuração inicial do Nginx pela versão final com SSL e recarregue o serviço.

#### Copie a configuração definitiva do Nginx

```
cp ~/nginx.conf ~/nginx/nginx.conf
```

#### Recarregue o Nginx para aplicar as novas configurações sem derrubar o container

```
docker exec proxy-reverso nginx -s reload
```

Com este último passo, o seu proxy reverso estará servindo suas aplicações de portfólio com o SSL ativado e a renovação de certificados será tratada automaticamente pelo Certbot.
