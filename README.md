# Elevator API Documentation

## Description
This is the API for the Elevator project, this API allows you to create, update, delete and get the information of the elevators, the elevators are stored in a MongoDB database.

### Technologies
- NodeJS
- Express
- MongoDB
- Mongoose
- Swagger
- Docker
- Docker Compose
- Jest
- Supertest

## Installation
### Clone the repository
```bash
git clone git@github.com:mirosico/elevator.git
```
### Install dependencies
```bash
npm install
```
### Create a new `.env` file for environment variables
Once you have cloned the repository succesfuly, you need to create a new `.env` file, in order to read the environment variables we need to use in this project.
- Make a copy of the `.env.example` file
- Rename the file to `.env`
- Put the correct values on each placeholder variables.
- These are the variables:
```
MONGODB_USER=
MONGODB_PASSWORD=
MONGODB_URL=
```
### Run the project

#### Development
```bash
npm run dev
```

#### Production
```bash
npm run start
```

### Run the tests
```bash
npm run test
```

### Test the API
You can test the API using the Swagger UI, you can access it by going to the following URL: `http://localhost:3000/api-docs/`

### Containerization with Docker and Docker Compose
You can run the project using Docker and Docker Compose, you need to have Docker and Docker Compose installed in your machine.

#### Development
```bash
docker-compose up --build
```