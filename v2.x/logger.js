/**
 * logger module
 */
const log4js = require('log4js'),
      logConfig = require('./log.json');

// load config
log4js.configure(logConfig);

const logger = log4js.getLogger('console');

// debug level
const debug = (value) => {
  logger.debug(value);
}

// info level
const info = (value) => {
  logger.info(value);
}

// error level
const error = (value) => {
  logger.error(value);
}

// console replacement
const replaceConsole = (logger) => {
  console.debug = logger.debug.bind(logger);
  console.log = logger.info.bind(logger);
  console.error = logger.error.bind(logger);
}
replaceConsole(logger);

module.exports = {
  debug:  debug,
  info:   info,
  error:  error
}