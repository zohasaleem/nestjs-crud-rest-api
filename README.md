# 🚀 NestJS - CRUD REST API

This is a **User Management API** built using **NestJS** and **PostgreSQL**. It includes, **API key authentication**, and follows best practices with **TypeORM**, **DTOs**, and **Swagger API documentation**.

---

##  **Features**
- **NestJS Framework** (TypeScript)
- **API Authentication**
- **PostgreSQL with TypeORM**
- **Swagger API Documentation**
- **Data Validation using Class Validator**
- **Database Migrations with TypeORM**

---

##  Installation

---

 **Clone the Repository**
```sh
git clone https://github.com/zohasaleem/nestjs-crud-rest-api.git
cd nestjs-crud-rest-api
```

**Install Dependencies**
```sh
npm install
```

**Configure Environment Variables**
---
Create a .env file in the project root and add the following:


**Database Configuration**
```sh
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=your_username
DATABASE_PASSWORD=your_password
DATABASE_NAME=your_database
### Authentication
API_KEY=your_api_key
```
---

**Run Database Migrations**
```sh
npm run migration:run
```
---

**Start the Server**
```sh
npm run start:dev
```
---
**Authentication Method**
---
**X-API-Key Authentication: **
Use x-api-key as a header for API authentication and set its value to the API key defined in your .env file.
```sh
x-api-key: YOUR_API_KEY
```
---

**API Documentation**
---
Once the server is running, you can access Swagger API Documentation at:
```sh
Swagger API Docs : http://localhost:3000/api/docs
```
--- 

