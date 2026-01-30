// src/counter.js
const logger = require('./logger');

let count = 0;

const counter = {
  read: () => {
    logger.info(`[COUNTER] read ${count}`);
    return count;
  },

  increase: () => {
    count += 1;
    logger.info(`[COUNTER] increase ${count}`);
    return count;
  },

  reset: () => {
    count = 0;
    logger.info(`[COUNTER] zeroed ${count}`);
    return count;
  },
};

module.exports = counter;