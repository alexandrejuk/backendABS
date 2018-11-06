# Test ABStartups
Teste técnico da ABStartups, desenvolvido com NodeJS, ExpressJS e a base de dados, feita com PostgresSQL, usando Sequelize para o ORM.

# Requerido
* Docker
* Docker-Compose
* NodeJS

## Como usar
1. clone o repositório: [git@github.com:alexandrejuk/backendABS.git](git@github.com:alexandrejuk/backendABS.git) 
2. cd backendABS
3. npm install
4. docker-compose up (para iniciar a aplicação)
5. npm test (para executar os testes)

## Método GET
A api possibilita fazer consulta de todo employees(funcionários) ou apenas um passando o **id**, no endpoint.

Exemplo todos os funcionarios
```
GET http://localhost:3000/api/v1/employees/
```
Exemplo da resposta do **endpoint** acima:

```json
[
  {
    "id": 1,
    "firstName": "ALEXANDRE",
    "lastName": "DOS SANTOS SOARES",
    "participation": 40,
    "createdAt": "2018-11-04T10:43:05.196Z",
    "updatedAt": "2018-11-04T10:43:05.196Z"
  },
  {
    "id": 2,
    "firstName": "THALITA",
    "lastName": "SILVA SOUSA",
    "participation": 60,
    "createdAt": "2018-11-04T10:43:05.236Z",
    "updatedAt": "2018-11-04T10:43:05.236Z"
  }
]
```

Exemplo apenas um funcionario
```
GET http://localhost:3000/api/v1/employees/2
```

Exemplo da resposta do **endpoint** acima:

```json
{
  "id": 2,
  "firstName": "THALITA",
  "lastName": "SILVA SOUSA",
  "participation": 60,
  "createdAt": "2018-11-04T10:43:05.236Z",
  "updatedAt": "2018-11-04T10:43:05.236Z"
}
```

## Método POST
A api possibilita cadastrar os employees(funcionário) com o método POST, segue exemplo do **body**, desse método.
```
POST http://localhost:3000/api/v1/employees
```

```json
{
  "firstName": "Andre",
  "lastName": "Oliveira",
  "participation": 40  
}
```

Exemplo da resposta do **endpoint** acima:

```json
{
  "id": 3,
  "firstName": "ANDRE",
  "lastName": "OLIVEIRA",
  "participation": 40,
  "createdAt": "2018-11-04T10:43:05.236Z",
  "updatedAt": "2018-11-04T10:43:05.236Z"
}
```

## Autor
[Alexandre dos Santos Soares](https://github.com/alexandrejuk)