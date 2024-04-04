/**
 * allows the use of async / await without try / catch blocks everywhere 
 * returns a tuple on await a promise to settle 
 * 
 * promise => ...args => [err, success]
 * 
 * @example 
 *   const put = tryPromise(axios.put)
 * 
 *   const [err, updatedUser] = await put('/users/42', { name: 'jo' })
 * 
 */
import makeError from './makeError'

const tryPromise = promise => (...args) => {  
  try {
    const p = promise(...args)
    if(!p instanceof Promise) return [undefined, result]
    return p
        .then(result => [undefined, result])
        .catch(axiosError => {
          return [makeError(axiosError), undefined]
        }) 
  } catch (e) {
    return [makeError(e), undefined]
  }
}

export default tryPromise