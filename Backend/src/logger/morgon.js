const morgan = require("morgan");
const config = require("../config");
const logger = require("./winston");

const stream = {
  // Use the http severity
  write: (message) => logger.http(message.trim()),
};

const skip = () => {
  const env = config.ENV || "development";
  return env !== "development";
};

const  morganMiddleware = morgan(
  ":remote-addr :method :url :status - :response-time ms",
  { stream, skip }
);

module.exports = morganMiddleware;

