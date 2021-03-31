# oki-pratama-putra-code-id

### GET /token

> Get access_token

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (201)_

```
{
    "access_token": <given access token by system>
}
```

---

### GET /users/accountNumber/:accountNumber

> Get single user by accountNumber

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "_id": "6063f1550f30f70015c80a8d",
    "userName": "Banana",
    "accountNumber": "1",
    "emailAddress": "banana@mail.com",
    "identityNumber": "1"
}
```

_Error Not Found (404)_

```
{
    "errorCode": "Not Found",
    "message": "Requested user was not found"
}
```

_Error Unauthorized (401)_

```
{
    "errorCode": "Unauthorized",
    "message": "Please provide a valid access token"
}
```

---

### GET /users/identityNumber/:identityNumber

> Get single user by identityNumber

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "_id": "6063f1550f30f70015c80a8d",
    "userName": "Banana",
    "accountNumber": "1",
    "emailAddress": "banana@mail.com",
    "identityNumber": "1"
}
```

_Error Not Found (404)_

```
{
    "errorCode": "Not Found",
    "message": "Requested user was not found"
}
```

_Error Unauthorized (401)_

```
{
    "errorCode": "Unauthorized",
    "message": "Please provide a valid access token"
}
```

---

### POST /users

> Create new user

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
    "userName": "<user input>",
    "accountNumber": "<user input>",
    "emailAddress": "<user input>",
    "identityNumber": "<user input>"
}
```

_Response (201 - Created)_

```
{
    "_id": <given id by system>,
    "userName": "<posted input>",
    "accountNumber": "<posted input>",
    "emailAddress": "<posted input>",
    "identityNumber": "<posted input>",
}
```

_Error Unauthorized (401)_

```
{
    "errorCode": "Unauthorized",
    "message": "Please provide a valid access token"
}
```

_Error Bad Request (400)_

```
{
    "errorCode": "Validation error",
    "message": "Input invalid"
}
```

---

### PUT /users/:\_id

> Update user defined by the id provided

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
    "userName": "<user input>",
    "accountNumber": "<user input>",
    "emailAddress": "<user input>",
    "identityNumber": "<user input>"
}
```

_Response (200 - OK)_

```
{
    "_id": <given id by system>,
    "userName": "<posted input>",
    "accountNumber": "<posted input>",
    "emailAddress": "<posted input>",
    "identityNumber": "<posted input>",
}
```

_Error Unauthorized (401)_

```
{
    "errorCode": "Unauthorized",
    "message": "Please provide a valid access token"
}
```

_Error Bad Request (400)_

```
{
    "errorCode": "Validation error",
    "message": "Input invalid"
}
```

_Error Not Found (404)_

```
{
    "errorCode": "Not Found",
    "message": "Requested user was not found"
}
```

---

### DELETE /users/:\_id

> Delete user defined by the id provided

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
{
    "message": "User successfully deleted"
}
```

_Error Not Found (404)_

```
{
    "errorCode": "Not Found",
    "message": "Requested user was not found"
}
```
