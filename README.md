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

> id must be the user id

> returns list of values pertaining to a user, user must have created values first

### GET to _/api/projects/user/:id_

> id must be the user id

> returns list of projects pertaining to that user with

### POST to _/api/projects_

expects:

```json
{
  "title": "CREATIVTY todo",
  "body": "A CREATIVE TODO BODY",
  "user_values_id": "1"
}
```

> user_values_id pertains to the values_id of the value the project will be attached to

### PUT to _/api/projects/:id_

> id must be the project_id

expects:

```json
{
  "title": "CREATIVTY todo",
  "body": "A CREATIVE TODO BODY"
}
```

### DELETE to _/api/projects/:id_

> id must be the project_id
