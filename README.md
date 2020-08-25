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
| Create new Model | POST | `/model` |
| List All Models | GET | `/model` |
| Find Model by Id | GET | `/model/{id}`|
| Update Model by Id | UPDATE | `/model/{id}`|
| Delete Model by Id | DELETE | `/model/{id}`|
|---|---|---|
| Create new Airplane | POST | `/airplane` |
| List All Airplanes | GET | `/airplane` |
| Find Airplane by Id | GET | `/airplane/{id}`|
| Update Airplane by Id | UPDATE | `/airplane/{id}`|
| Delete Airplane by Id | DELETE | `/airplane/{id}`|
|---|---|---|
| Create new ANAC Test | POST | `/airplane` |
| List All ANAC Tests | GET | `/anacTest` |
| Find ANAC Test by Id | GET | `/anacTest/{id}`|
| Update ANAC Test by Id | UPDATE | `/anacTest/{id}`|
| Delete ANAC Test by Id | DELETE | `/anacTest/{id}`|

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
