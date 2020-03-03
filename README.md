# Essentialism API Documentation

## here is the base url:

_https://essentialism-pg-be.herokuapp.com/_

### POST to _/api/auth/register_ expects:

```
{
"email": "email",
"password": "password",
"name": "<OPTIONAL>"
}
```

### POST to _/api/auth/login_ expects:

```
{
"email": "email",
"password": "password"
}
```

> those endpoints return the JWT.

> the JWT is required to access all other endpoints

### GET to _/api/values_

returns a list of values
POST to /api/user_values/:id
\*\*id must be the user id
expects:
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

GET to /api/user_values/:id
returns list of values pertaining to a user, user must have created values first
