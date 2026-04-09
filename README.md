# 🍽️ Restaurant System API

API REST desenvolvida para gerenciamento de pedidos em um sistema de restaurante, incluindo autenticação de usuários, controle de produtos, categorias e fluxo completo de pedidos.

## 🚀 Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL (Neon)
- Zod (validação de dados)
- JWT (autenticação)
- Bcrypt (criptografia de senha)
- Multer (upload de arquivos)
- Cloudinary (armazenamento de imagens)

---

## 📂 Arquitetura

O projeto segue uma arquitetura em camadas:

- **Controllers** → Recebem as requisições
- **Services** → Contêm as regras de negócio
- **Middlewares** → Autenticação, validações e tratamento de erros
- **Prisma** → Comunicação com o banco de dados

---

## 🔐 Autenticação

A API utiliza autenticação baseada em **JWT (JSON Web Token)**.

Rotas protegidas exigem o envio do token no header:

Authorization: Bearer TOKEN

---

## 📡 Endpoints

### 🔓 Rotas Públicas

- `POST /users` → Criar usuário  
- `POST /session` → Autenticação (login)

---

### 🔒 Rotas Autenticadas

#### 👤 Usuário
- `GET /me` → Retorna dados do usuário logado  

---

#### 📁 Categorias
- `POST /category` → Criar categoria (**ADMIN**)  
- `GET /category` → Listar categorias  

---

#### 🍕 Produtos
- `POST /product` → Criar produto com imagem (**ADMIN**)  
- `DELETE /product` → Deletar produto (**ADMIN**)  
- `GET /category/product` → Listar produtos por categoria  

---

#### 📋 Pedidos
- `POST /order` → Criar pedido  
- `POST /order/add` → Adicionar item ao pedido  
- `DELETE /order/remove` → Remover item do pedido  
- `GET /orders` → Listar pedidos (filtro opcional por draft)  
- `GET /order/detail` → Detalhes de um pedido  
- `PUT /order/send` → Enviar pedido para produção  
- `PUT /order/finish` → Finalizar pedido  
- `DELETE /order` → Deletar pedido  

---

## 🧪 Validações

As validações são feitas utilizando **Zod**, garantindo integridade dos dados nas requisições.

---

## ☁️ Upload de imagens

O upload de imagens é realizado com **Multer**, com armazenamento em nuvem via **Cloudinary**, retornando a URL da imagem para persistência no banco.

---

## ⚙️ Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/Andersondev123/restaurant-system-api.git