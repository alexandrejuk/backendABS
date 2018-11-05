# Test ABStartup 

# Requerido
* Docker

# Informações da API 


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
  "firstName": "Andre",
  "lastName": "Oliveira",
  "participation": 40,
  "createdAt": "2018-11-04T10:43:05.236Z",
  "updatedAt": "2018-11-04T10:43:05.236Z"
}
```

## Autor
[Alexandre dos Santos Soares](https://github.com/alexandrejuk)