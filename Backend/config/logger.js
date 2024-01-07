const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;
//const path = require('path');
//var fs = require('fs')

const PORT = process.env.PORT || 3001
const IP = process.env.IP || "127.0.0.1"

const LOG_PATH = process.env.LOG_PATH || 'log';
// const dir = path.join(__dirname, '..' ,LOG_PATH)
// if (!fs.existsSync(dir)){
//   fs.mkdirSync(dir);
// }

// var options = {
//     file: {
//       level: 'info',
//       name: 'file.info',
//       filename: path.join(__dirname, '..' ,LOG_PATH, 'app.log'),
//       handleExceptions: true,
//       json: true,
//       maxsize: 5242880, // 5MB
//       maxFiles: 100,
//       colorize: true,
//     },
//     errorFile: {
//       level: 'error',
//       name: 'file.error',
//       filename: path.join(__dirname, '..' ,LOG_PATH, 'error.log'),
//       handleExceptions: true,
//       json: true,
//       maxsize: 5242880, // 5MB
//       maxFiles: 100,
//       colorize: true,
//     },
//     console: {
//       level: 'debug',
//       handleExceptions: true,
//       json: false,
//       colorize: true,
//     },
//   };

var options = {
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

  const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] [${level.toUpperCase()}]: ${message}`;
  });

var logger = createLogger({
    format: combine(
        label({ label: `${IP}:${PORT}` }),
        timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        myFormat
      ),
    transports: [
        new (transports.Console)(options.console),
        new (transports.File)(options.file),
        new transports.File(options.errorFile)
    ],
    exitOnError: false
});

module.exports = logger;