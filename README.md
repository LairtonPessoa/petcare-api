# PetCare - API

Sistema de Acompanhamento de Saúde para Pets.
Esta é a API (Backend) da aplicação.

## Pré-requisitos

- Node.js (v18 ou superior)
- Certifique-se de ter o Docker e o Docker Compose (ou Docker Desktop) instalados e rodando em sua máquina.

## Como rodar o projeto localmente

1. Clone o repositório:
`git clone https://github.com/LairtonPessoa/petcare-api.git`

2. Acesse a pasta do projeto:
`cd petcare-api`

3. Configure as variáveis de ambiente:
Na raiz do projeto, faça uma cópia do arquivo `.env.example` e renomeie essa cópia para `.env`. Abra este novo arquivo e substitua os valores genéricos por suas próprias credenciais. É fundamental não deixar espaços em branco após o sinal de igual. Mantenha a variável `DB_HOST` e `DB_PORT` com o valor `petcare_db` e `5432`, pois elas garantem a comunicação interna da infraestrutura.

4. Suba a infraestrutura:
Execute o comando abaixo no terminal para construir as imagens e iniciar os contêineres.
`docker compose up -d --build`

O script de inicialização executará as migrações e o povoamento do banco de dados automaticamente. A API estará rodando e pronta para receber requisições na porta 3001.