/**
 * prune the axios error 
 * ensure the same shape for exceptions 
 * default to status 500 for exceptions 
 * 
 *  {
 *    message: string
 *    url: string
 *    data: string
 *    status: number
 *    statusText: string
 *    response_data: string
 *    port: number
 *    code: string
 *    cause: string
 *  }
 */
import { mergeRight, pipe } from 'ramda'
import { flatPick } from 'ramjam'

const axiosErrorPaths = [
  ['message'],
  ['config', 'url'],
  ['config', 'data'],
  ['response', 'status'],
  ['response', 'statusText'],
  ['response', 'data'],
  ['cause', 'errors', 0, 'port'],
  ['code'],
  ['cause']
]

export const errorDefaults = {
  message: 'unknown error',
  url: '', 
  data: '', 
  status: 500,
  statusText: 'internal server error',
  response_data: '',
  port: '',
  code: '',
  cause: ''
}

export const setErrorDefaults = mergeRight(errorDefaults)

const makeError = pipe(
  flatPick(axiosErrorPaths),
  setErrorDefaults
)

export default makeError
