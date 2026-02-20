// src/main.js

// Tuodaan Express-sovelluskehys HTTP-palvelimen rakentamiseen
const express = require('express');

// Oma logger-moduuli, joka huolehtii sovelluksen lokituksesta
const logger = require('./logger');

// Reitit, jotka määrittelevät sovelluksen HTTP-pyynnöt ja niiden käsittelyn
const routes = require('./routes');

const app = express();

app.use('/', routes);

// Käynnistä vain jos tiedosto ajetaan suoraan
if (require.main === module) {
  const PORT = 3000;
  // Käynnistetään HTTP-palvelin ja kuunnellaan määritettyä porttia
  app.listen(PORT, () => {
    logger.info('[MAIN] Starting');
    console.log(`Server running on http://localhost:${PORT}`);
  });

  process.on('SIGINT', () => {
    logger.info('[MAIN] Stopping');
    process.exit();
  });
}


module.exports = app; 
