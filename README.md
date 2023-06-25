# backend-mysql-api


<h4 align="center"> 
	 Cadastro de usuários 
</h4>

<p align="center">
	<img alt="Status Concluído" src="https://img.shields.io/badge/STATUS-CONCLU%C3%8DDO-brightgreen">
</p>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## <a id="#-sobre-o-projeto"></a> 💻 Sobre o projeto

📄 Aplicativo que permite a criação de rotas que salva as informações da tela abaixo.

![Image](https://i.ibb.co/xM8fPNz/image.png)


---
## <a id="#-como-executar-o-projeto"></a> 🛣️ Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), Docker e docker-compose. 

Versão Node: 18.13.0


#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git git@github.com:roberto-gfurlan/bck-form-api.git

# Acesse a pasta do projeto no terminal/cmd
$ cd bck-form-api

# Suba o container do docker
$ docker-compose up

# Instale as dependências
$ npm install 
ou
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ npm run start
ou
$ yarn start

# O servidor inciará na porta:4568 - acesse http://localhost:4568 
# O servidor mysql inciará na porta:3306 - acesse http://localhost:3306 
$ docker vai criar um container com o banco de dados mysql
as credenciais de acesso estão no arquivo .env

```
---

## <a id="#-tecnologias"></a>🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[TypeORM](https://typeorm.io/)**
-   **[MySQL](https://www.mysql.com/)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[dotENV](https://github.com/motdotla/dotenv)**

> Veja o arquivo  [package.json](https://github.com/roberto-gfurlan/bck-form-api/blob/main/package.json)

**Utilitários**

-   Collection de API:  **[Postman](https://github.com/roberto-gfurlan/bck-form-api/blob/main/Routes%20for%20UsersProfile.postman_collection.json)**

---

## <a id="#user-content--licença"></a>📝 Licença

<!-- Este projeto esta sobe a licença [MIT](./LICENSE). -->

Feito com ❤️ por Roberto 👋🏽 [Entre em contato!](https://www.linkedin.com/in/roberto-gfurlan/)

