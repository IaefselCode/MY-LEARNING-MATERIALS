const {logEvents} = require('./logEvents');

const errorHandler = (err, req, res, next) => { //It receives request responce next and also an error and then we can log and also send error messages
    logEvents(`${err.name}: ${err.message}`,'errLog.txt');
    console.error(err.stack)
    res.status(500).send(err.message);
  }
//   After then we need to create an errorLog
// These is where exporting logEvens comes in use 
module.exports = errorHandler;