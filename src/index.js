/**
 * wrap axios
 * 
 * @example 
 *   const config = { baseURL: 'http://localhost:3000' }
 *   const http = wrapAxios(config)
 * 
 *   async function request() {
 * 
 *   const [err, updatedUser] = await http.put('/users/42', { name: 'jo' })
 *   }
 * 
 */
import axios from 'axios'
import qs from 'qs'

import tryPromise from './tryPromise'

import { prop } from 'ramda'

const onSuccess = prop('data')

const makeGetUrl = (route, query) => {
  const queryString = qs.stringify(query)
  return `${route}?${queryString}`
}

const create = config => {

  const http = axios.create({
    withCredentials: true,
    ...config,
  })

  http.interceptors.response
    .use(onSuccess)

  const get = (route, query) => {
    const url = makeGetUrl(route, query)
    return tryPromise(http.get)(url)
  }

  const put = tryPromise(http.put)
  const post = tryPromise(http.post)
  const destroy = tryPromise(http.delete)

  return {
    get,
    put,
    post,
    delete: destroy
  }
}
 
export default create