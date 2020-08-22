# Backend API - Aviação

## Setup

### Install all dependencies:

```bash
npm i
```

### Run the backend server

```bash
npx nodemon
```

## Endpoints

| Método | Verbo HTTP | Endpoint |
|---|---|---|
| Create new Model | POST | `http://localhost:3000/api/model` |
| List All Models | GET | `http://localhost:3000/api/model` |
| Find Model by Id | GET | `http://localhost:3000/api/model/{id}`|
| Update Model by Id | UPDATE | `http://localhost:3000/api/model/{id}`|
| Delete Model by Id | DELETE | `http://localhost:3000/api/model/{id}`|

## Database

### Create database

```bash
createdb aviacao
```

### Enter in the database

```bash
psql aviacao
```

### Create model table

```bash
CREATE TABLE model (
    modelId serial PRIMARY KEY,
    name VARCHAR (50),
    capacity int,
    weight float
);
```
