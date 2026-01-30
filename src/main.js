// src/main.js
const express = require('express');
const logger = require('./logger');
const routes = require('./routes');

const app = express();

app.use('/', routes);

// Käynnistä vain jos tiedosto ajetaan suoraan
if (require.main === module) {
  const PORT = 3000;
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