const util = require('util')

const config = {
  colors: true,
  depth: null, 
  showHidden: false
}

export const log = x => util.inspect(x, config)
