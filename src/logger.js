// Tämä moduuli luo Winston-pohjaisen loggerin, joka kirjaa sovelluksen tapahtumat
// sekä konsoliin että tiedostoihin. Loggeri käyttää JSON-muotoista lokitusta ja 
// lisää aikaleiman jokaiseen merkintään. Virheet tallennetaan erilliseen 
// error.log -tiedostoon ja kaikki lokit combined.log -tiedostoon.

const { createLogger, transports, format } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
  ]
});



module.exports = logger;
