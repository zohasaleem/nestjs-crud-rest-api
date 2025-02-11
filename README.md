# 🚀 NestJS CRUD REST API

This is a **User Management API** built using **NestJS** and **PostgreSQL**. It includes, **API key authentication**, and follows best practices with **TypeORM**, **DTOs**, and **Swagger API documentation**.

---

##  **Features**
- **NestJS Framework** (TypeScript)
- **JWT Authentication**
- **X-API-Key Authentication**
- **PostgreSQL with TypeORM**
- **Swagger API Documentation**
- **Data Validation using Class Validator**
- **Auto Timestamps (created_at, updated_at)**
- **Password Hashing with Bcrypt**
- **Database Migrations with TypeORM**

---

##  Installation

```sh
### Clone the Repository
git clone https://github.com/zohasaleem/nestjs-crud-rest-apis
cd nestjs-crud-rest-api


### Install Dependencies
npm install


###  Configure Environment Variables
Create a .env file in the project root and add the following:

###  Database Configuration
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=your_username
DATABASE_PASSWORD=your_password
DATABASE_NAME=your_database
### Authentication
API_KEY=your_api_key

### Run Database Migrations
npm run migration:run


###  Start the Server
npm run start:dev


###  API Documentation
Once the server is running, you can access Swagger API Documentation at:
 Swagger API Docs : http://localhost:3000/api/docs


###  Authentication Methods
X-API-Key Authentication: Use x-api-key: YOUR_API_KEY in headers.
