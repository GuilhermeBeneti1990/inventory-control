# Controle de Estoque (Inventory Control)

API REST desenvolvida em Node.js com TypeScript para controle de estoque, utilizando Express, Prisma e SQLite.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Yarn](https://yarnpkg.com/) (gerenciador de pacotes)

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd controle-estoque
```

2. Instale as dependências:

```bash
yarn install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="seu-secret-jwt-aqui"
```

**Importante:** Substitua `seu-secret-jwt-aqui` por uma string secreta forte e aleatória para segurança do JWT.

4. Configure o banco de dados:

Execute as migrações do Prisma para criar as tabelas no banco de dados:

```bash
npx prisma migrate deploy
```

Ou, se preferir gerar o Prisma Client:

```bash
npx prisma generate
```

## ▶️ Executando o Projeto

Para iniciar o servidor em modo de desenvolvimento:

```bash
yarn dev
```

O servidor estará rodando em `http://localhost:3333`

## 📡 Endpoints Disponíveis

### Health Check

- **GET** `/health` - Verifica se o servidor está funcionando

### Usuários

- **POST** `/users` - Cria um novo usuário
- **POST** `/users/auth` - Autentica um usuário e retorna um token JWT

## 🗂️ Estrutura do Projeto

```
controle-estoque/
├── prisma/
│   ├── migrations/     # Migrações do banco de dados
│   └── schema.prisma   # Schema do Prisma
├── src/
│   ├── controllers/    # Controladores das rotas
│   ├── models/         # Interfaces e tipos
│   ├── services/       # Lógica de negócio
│   ├── prisma/         # Cliente Prisma
│   ├── routes.ts       # Definição das rotas
│   └── server.ts       # Configuração do servidor Express
├── .env                # Variáveis de ambiente (não versionado)
└── package.json        # Dependências do projeto
```

## 🗄️ Banco de Dados

O projeto utiliza SQLite como banco de dados. O arquivo `dev.db` será criado automaticamente após executar as migrações.

### Modelos

- **User** - Usuários do sistema
- **Category** - Categorias de produtos
- **Product** - Produtos do estoque
- **Item** - Itens individuais

## 🔧 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Express** - Framework web para Node.js
- **Prisma** - ORM para gerenciamento do banco de dados
- **SQLite** - Banco de dados relacional
- **JWT** - Autenticação via tokens
- **bcryptjs** - Hash de senhas
- **dotenv** - Gerenciamento de variáveis de ambiente

## 📝 Notas

- O arquivo `.env` não deve ser versionado (já está no `.gitignore`)
- O arquivo `dev.db` também não é versionado
- Certifique-se de manter o `JWT_SECRET` seguro em produção
