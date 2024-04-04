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
  ['response', 'data']
]

export const errorDefaults = {
  url: undefined, 
  data: undefined, 
  status: 500,
  statusText: 'internal server error',
  response_data: undefined
}

export const setErrorDefaults = mergeRight(errorDefaults)

const makeError = pipe(
  flatPick(axiosErrorPaths),
  setErrorDefaults
)

export default makeError




