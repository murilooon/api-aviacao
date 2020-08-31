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
| List All ANAC Tests | GET | `/anac_test` |
| Find ANAC Test by Id | GET | `/anac_test/{id}`|
| Update ANAC Test by Id | UPDATE | `/anac_test/{id}`|
| Delete ANAC Test by Id | DELETE | `/anac_test/{id}`|
|---|---|---|
| Create new Syndicate | POST | `/syndicate` |
| List All Syndicates | GET | `/syndicate` |
| Find Syndicate by Id | GET | `/syndicate/{id}`|
| Update Syndicate by Id | UPDATE | `/syndicate/{id}`|
| Delete Syndicate by Id | DELETE | `/syndicate/{id}`|
|---|---|---|
| Create new Employee | POST | `/employee` |
| List All Employees | GET | `/employee` |
| Find Employee by Id | GET | `/employee/{id}`|
| Update Employee by Id | UPDATE | `/employee/{id}`|
| Delete Employee by Id | DELETE | `/employee/{id}`|


## Database

### Log into the PostgreSQL

```bash
sudo su - postgres
```

### Create database

```bash
createdb aviacao
```

### Migrate the tables

```bash
# create all tables
npm run knex:migrate

# delete all tables
npm run knex:reset

# rollback last migration
npm run knex:unmigrate
```

### Populate the tables

```bash
npm run knex:seed
```

### Alternatively

#### Enter in the database

```bash
psql aviacao
```

#### List all tables

```bash
\dt
```

#### Describe a table

```bash
\d 'table'
```

#### Create model table

```bash
CREATE TABLE model (
    model_id serial PRIMARY KEY,
    name VARCHAR (50),
    capacity int,
    weight float
);
```

#### Create airplane table

```bash
CREATE TABLE airplane (
    register_id serial PRIMARY KEY,
    serial_number int,
    model_id serial REFERENCES model(model_id)
);
```

#### Create test table

```bash
CREATE TABLE anac_test (
    anac_test_id serial PRIMARY KEY,
    name VARCHAR (50),
    maxScore float
);
```

#### Create syndicate table

```bash
CREATE TABLE syndicate (
    syndicate_id serial PRIMARY KEY,
    name string
);
```

#### Create employee table

```bash
CREATE TABLE employee (
    employee_id serial PRIMARY KEY,
    syndicate_id serial REFERENCES syndicate(syndicate_id),
    name string,
    address string,
    phone string,
    salary float
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
