# Catálogo de Itens de Configuração (ICs) - Projeto PetCare

**Projeto:** PetCare (Sistema de Gerenciamento Veterinário)  
**Versão:** v1.0.0  
**Data:** 15/04/2026

## Itens de Configuração Mapeados

- **ID**: IC-001
  - **Descrição**: Código-fonte do Backend (API Node.js)
  - **Repositório**: [LairtonPessoa/petcare-api](https://github.com/LairtonPessoa/petcare-api)
  - **Branch padrão**: `main`
  - **Tags**: `v1.0.0`

- **ID**: IC-002
  - **Descrição**: Código-fonte do Frontend (Aplicação Web Next.js)
  - **Repositório**: [LaisaMireli/petcare-web](https://github.com/LaisaMireli/petcare-web)
  - **Branch padrão**: `main`
  - **Tags**: `v1.0.0`

- **ID**: IC-003
  - **Descrição**: Schema do Banco de Dados (Prisma ORM)
  - **Repositório**: [prisma/schema.prisma](https://github.com/LairtonPessoa/petcare-api/blob/main/prisma/schema.prisma) (Repositório Backend)
  - **Tags**: `v1.0.0`

- **ID**: IC-004
  - **Descrição**: Orquestração de Containers (Docker Compose)
  - **Repositório**: [docker-compose.yml](https://github.com/LairtonPessoa/petcare-api/blob/main/docker-compose.yml) (Repositório Backend)
  - **Tags**: `v1.0.0`

- **ID**: IC-005
  - **Descrição**: Gerenciamento de Dependências (Backend)
  - **Repositório**: [package.json](https://github.com/LairtonPessoa/petcare-api/blob/main/package.json) (Repositório Backend)
  - **Tags**: `v1.0.0`

- **ID**: IC-006
  - **Descrição**: Gerenciamento de Dependências (Frontend)
  - **Repositório**: [package.json](https://github.com/LaisaMireli/petcare-web/blob/main/package.json) (Repositório Frontend)
  - **Tags**: `v1.0.0`

**ID**: IC-007
  - **Descrição**: Documentação Técnica (README)
  - **Repositório**: [README.md](https://github.com/LaisaMireli/petcare-web/blob/main/README.md) (Repositório Frontend)
  - **Tags**: `v1.0.0`

- **ID**: IC-008
  - **Descrição**: Documentação Técnica (README)
  - **Repositório**: [README.md](https://github.com/LairtonPessoa/petcare-api/blob/main/README.md) (Repositório Backend)
  - **Tags**: `v1.0.0`

- **ID**: IC-009
  - **Descrição**: Definição de Rotas da API
  - **Repositório**: [Código-fonte das rotas](https://github.com/LairtonPessoa/petcare-api/blob/main/src/routes/index.ts) (Repositório Backend)
  - **Tags**: `v1.0.0`

## Controle de Mudanças via Git


- **Marcação de Versões (Tags)**:
  ```bash
  git tag -a v1.0.0 -m "Release: Estabelecimento da baseline inicial do projeto PetCare"
  git push origin --tags