<img src="https://github.com/user-attachments/assets/137327f1-1f49-4ecc-89e7-239382e493e3" alt="logo.recicle365" width="800"/>

<br>
<br>

**Recicle365** é uma **API REST** que simplifica o gerenciamento de resíduos e facilita o acesso a pontos de coleta de materiais recicláveis.<br>
Com o Recicle365, os usuários podem se cadastrar e fazer login. Uma vez autenticado, o usuário pode:

- Cadastrar novos pontos de coleta e especificar os tipos de resíduos aceitos em cada um.
- Visualizar informações detalhadas sobre cada ponto de coleta.
- Editar informações ou deletar pontos de coleta existentes.

Além disso, através do endpoint "/locals/:id/maps", é possível obter um link para o **Google Maps** indicando a localização do ponto de coleta cadastrado.

Desenvolvi este projeto como parte da avaliação final do segundo módulo da formação **Futuro DEV**, do programa **Floripa Mais Tec 2**, coordenado pelo **Lab365** e promovido pela **Prefeitura de Florianópolis**, em parceria com **ACATE**, **SESI** e **SENAI**.

<br>

<img src="https://github.com/user-attachments/assets/2d9892ab-df5b-48cd-88fd-3bda170eae2d" alt="Imagem" width="800"/>

## 🚀 Tecnologias Utilizadas

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<br>

## Principais Rotas

### 👤 Usuário

#### Rota: `/usuario`

- **Método:** `POST`
- **Descrição:** Rota para cadastro de novos usuários.

### 🔐 Login

#### Rota: `/login`

- **Método:** `POST`
- **Descrição:** Autentica um usuário e retorna um token JWT.
- **Parâmetros:**
  - `email`: O email do usuário.
  - `password`: A senha do usuário.

### 📍 Locais

#### Rota: `/local`

- **Método:** `USE`
- **Descrição:** Rota principal para operações relacionadas a locais, protegida por validação de token.
- **Uso de Token:**<br>
  - Após realizar o login, inclua o token JWT no cabeçalho da requisição para acessar rotas privadas.

#### Rota: `/local/:id/maps`

- **Método**: `GET`
- **Descrição:** Obtém o link do Google Maps para o local especificado.
- **Parâmetros:**
  - `id`: O ID do local.

<br>

## 🛠️ Instalação e Configuração

### Clone o repositório:

```
git clone https://github.com/jaquelinemarina/Recicle365_BackEnd
```

### Instale as dependências:

```
npm install
```

### Copie o arquivo de exemplo de variáveis de ambiente:

- Edite o arquivo .env com as suas configurações.

```
cp .env_example .env
```

### Rode o repositório em ambiente de desenvolvimento:

```
npm run start:dev
```

<br>

## 📜 Trabalhando com Documentação

### Gerar o documento do Swagger:

```
npm run swagger
```

### Vizualizar as rotas:

- Abra o navegador e vá para:

```
http://localhost:3000/docs
```

<br>

## ⚙️ Trabalhando com Migrations

### Criar uma migration:

```
npx sequelize-cli migration:generate --name nome_da_migração
```

### Rodar migration:

```
npx sequelize db:migrate
```

### Reverter a última migration:

```
npx sequelize-cli db:migrate:undo
```

<br>

## 📚 Bibliotecas Utilizadas

### Instalar o nodemon:

`npm install nodemon`

### Instalar o sequelize:

`npm install sequelize`

### Instalar o driver do PostgreSQL:

`npm install pg`

### Instalar o CLI do sequelize:

`npm install -g sequelize-cli`

### Instalar o dotenv:

`npm install dotenv`

### Instalar o axios:

`npm install axios`

### Instalar o Swagger UI:

`npm install swagger-ui-express`

### Instalar o Swagger AutoGen:

`npm install swagger-autogen`

<br>

### 📜 [Documentação Sequelize](https://sequelize.org/docs/v6/core-concepts/model-basics/)

### 📜 [Documentação Swagger](https://swagger.io/docs/specification/2-0/basic-structure/)

<br>

## 👨‍💻 Autora

### Jaqueline Marina

[<img loading="lazy" src="https://avatars.githubusercontent.com/u/153782247?v=4" width=145><br>Acesse meu LinkedIn](https://www.linkedin.com/in/jaquelinemarina)
