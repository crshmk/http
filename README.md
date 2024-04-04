```bash
npm i github:crshmk/request
```

---

## [Axios](https://www.npmjs.com/package/axios) wrapper 

- async / await use without the need for try / catch blocks 
- pruned error object uniform to axios errors and js exceptions

---

1. Pass a config to [instantiate](https://axios-http.com/docs/instance) axios 
```javascript 
import wrapAxios from 'wrap-axios'

const baseURL = 'http://localhost:3000/api/v1'

const http = wrapAxios({ baseURL })
// { get, put, post, delete }
```

2. Await a request and recieve `[error, result]`

```javascript 
async function updateUser(userId) {

  const [err, user] = await http.put('/users', { name: 'jo'})

  if(err) {
    res.status(err.status).json(err)
    return 
  }

  res.json(user)
}

```

---

### Note 

- Sets `{ withCredentials: true }` as default 

- Get requests take an object, e.g.

```javascript 

http.get('/users', { userId: 42 })
// e.g. 'http://localhost:3000?userId=42
```

---

### Error shape 

A few props are [plucked](https://github.com/crshmk/utils?tab=readme-ov-file#flatpick) from the axios error and flattened into 

```javascript 
{ data, message, response_data, status, statusText }

```

```javascript 

const http = wrapAxios()

const [err, user] = http.get('/xxx')

console.log(err)
// {
//   message: 'Request failed with status code 502',
//   url: '/users',
//   data: 'config data',
//   status: 502,
//   statusText: 'Bad Gateway',
//   response_data: 'response data'
// }
```

Exceptions return the same shape with a 500 status. 

