# PetCare - API

Sistema de Acompanhamento de Saúde para Pets.
Esta é a API (Backend) da aplicação.

## Pré-requisitos

- Node.js (v18 ou superior)
- Docker e Docker Compose

## Como rodar o projeto localmente

1. Clone o repositório:
`git clone https://github.com/LairtonPessoa/petcare-api.git`
`cd petcare-api`

2. Instale as dependências locais:
`npm install`

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto usando o arquivo `.env.example` como base.
`cp .env.example .env`

4. Suba os containers do banco de dados e da API:
`docker compose up -d --build`

5. Execute as migrations do banco de dados:
`npx prisma migrate dev`

A API estará rodando na porta 3001.