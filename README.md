# Backend REST API - Aviação

## Setup

### Install all dependencies:

```bash
npm i
```

### Run the backend server

```bash
npm start
```

## Endpoints

| Método | Verbo HTTP | Endpoint |
|---|---|---|
| Create new Model | POST | `http://localhost:3000/api/model` |
| List All Models | GET | `http://localhost:3000/api/model` |
| Find Model by Id | GET | `http://localhost:3000/api/model/{id}`|
| Update Model by Id | UPDATE | `http://localhost:3000/api/model/{id}`|
| Delete Model by Id | DELETE | `http://localhost:3000/api/model/{id}`|
|---|---|---|
| Create new Airplane | POST | `http://localhost:3000/api/airplane` |
| List All Airplanes | GET | `http://localhost:3000/api/airplane` |
| Find Airplane by Id | GET | `http://localhost:3000/api/airplane/{id}`|
| Update Airplane by Id | UPDATE | `http://localhost:3000/api/airplane/{id}`|
| Delete Airplane by Id | DELETE | `http://localhost:3000/api/airplane/{id}`|
|---|---|---|
| Create new ANAC Test | POST | `http://localhost:3000/api/airplane` |
| List All ANAC Tests | GET | `http://localhost:3000/api/anacTest` |
| Find ANAC Test by Id | GET | `http://localhost:3000/api/anacTest/{id}`|
| Update ANAC Test by Id | UPDATE | `http://localhost:3000/api/anacTest/{id}`|
| Delete ANAC Test by Id | DELETE | `http://localhost:3000/api/anacTest/{id}`|

## Database

### Log into the PostgreSQL

```bash
sudo su - postgres
```

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

### Create airplane table

```bash
CREATE TABLE airplane (
    registerId serial PRIMARY KEY,
    serialnumber int,
    modelId serial REFERENCES model(modelId)
);
```

### Create test table

```bash
CREATE TABLE anacTest (
    anacTestId serial PRIMARY KEY,
    name VARCHAR (50),
    maxScore float
);
```

## Set .env

### Copy .env.example

```bash
mv .env.example .env
```

### Change the DATABASE_URL with your values

Mine look like this

```bash
DATABASE_URL=postgres://postgres:postgres@localhost:5432/aviacao

```
