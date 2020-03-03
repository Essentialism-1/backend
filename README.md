# Essentialism API Documentation

### here is the base url:

_https://essentialism-pg-be.herokuapp.com/_

### POST to _/api/auth/register_ expects:

```json
{
  "email": "email",
  "password": "password",
  "name": "<OPTIONAL>"
}
```

### POST to _/api/auth/login_ expects:

```json
{
  "email": "email",
  "password": "password"
}
```

> those endpoints return the JWT.

> the JWT is required to access all other endpoints

## The following endpoints require a JWT (axiosWithAuth())

### GET to _/api/values_

> returns a _**list of values**_

### POST to _/api/user_values/:id_

> id must be the user id

expects:

```json
{
  "values": [
    {
      "values_id": 10,
      "description": "some text here"
    },
    {
      "values_id": 3,
      "description": "some text here"
    },
    {
      "values_id": 1,
      "description": "some text here"
    }
  ]
}
```

### GET to _/api/user_values/:id_

> returns list of values pertaining to a user, user must have created values first
