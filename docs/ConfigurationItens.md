# Item de Configuração: Backend API PetCare

- **ID**: IC-001
- **Tipo**: Código-fonte
- **Versão**: 1.0.2
- **Repositório**: https://github.com/LairtonPessoa/petcare-api
- **Branch**: develop
- **Commit ID**: 3fdd342
- **Mudanças**: Criação da estrutura de automação de Integração Contínua com GitHub Actions (.github/workflows/ci.yml) para validação de testes na API.
- **Data Release**: 09/06/2026

# Item de Configuração: Schema do Banco de Dados (Prisma)

- **ID**: IC-003
- **Tipo**: Configuração
- **Versão**: 1.0.1
- **Repositório**: https://github.com/LairtonPessoa/petcare-api/blob/develop/prisma/schema.prisma
- **Branch**: develop
- **Commit ID**: 3fdd342
- **Mudanças**: Correção ortográfica no enum Mood (ANSIOSO) e na propriedade de quantidade do FoodDiary (amount) para alinhar tipagens
- **Data Release**: 09/06/2026

# Item de Configuração: Docker Compose

- **ID**: IC-004
- **Tipo**: Configuração
- **Versão**: 1.0.0
- **Repositório**: https://github.com/LairtonPessoa/petcare-api/blob/develop/docker-compose.yml
- **Branch**: develop
- **Commit ID**: b944e68
- **Mudanças**: Estabelecimento da baseline da infraestrutura via containers para orquestração da API Node.js e banco PostgreSQL
- **Data Release**: 15/04/2026
  
# Item de Configuração: Dependências do Backend

- **ID**: IC-005
- **Tipo**: Configuração
- **Versão**: 1.0.1
- **Repositório**: https://github.com/LairtonPessoa/petcare-api/blob/develop/package.json
- **Branch**: develop
- **Commit ID**: 3fdd342
- **Mudanças**: Inclusão das bibliotecas cors e @types/cors para viabilizar a comunicação e o envio de requisições do front-end
- **Data Release**: 09/06/2026

# Item de Configuração: Documentação Técnica do Backend (API)

- **ID**: IC-008
- **Tipo**: Documento
- **Versão**: 1.0.0
- **Repositório**: https://github.com/LairtonPessoa/petcare-api/blob/develop/README.md
- **Branch**: develop
- **Commit ID**: b944e68
- **Mudanças**: Estabelecimento da baseline da documentação técnica com diretrizes de execução e requisitos de ambiente
- **Data Release**: 15/04/2026

# Item de Configuração: Definição de Rotas do Backend (API)

- **ID**: IC-009
- **Tipo**: Código-fonte
- **Versão**: 1.0.0
- **Repositório**: https://github.com/LairtonPessoa/petcare-api/blob/develop/src/routes/index.ts
- **Branch**: develop
- **Commit ID**: b944e68
- **Mudanças**: Centralização e orquestração das rotas da API, integrando os módulos de usuários, pets, vacinas, agendamentos e os diários de acompanhamento (humor, alimentação e peso) à baseline do projeto.
- **Data Release**: 15/04/2026