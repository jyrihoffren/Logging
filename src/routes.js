// src/routes.js
const express = require('express');
const counter = require('./counter');
const logger = require('./logger');

const router = express.Router();

router.get('/counter-read', (req, res) => {
  const value = counter.read();
  logger.info(`[COUNTER] read ${value}`);
  res.send(value.toString()); // <-- lähetetään vain numero
});

router.get('/counter-increase', (req, res) => {
  const value = counter.increase();
  logger.info(`[COUNTER] increase ${value}`);
  res.send(value.toString()); // <-- vain numero
});

router.get('/counter-reset', (req, res) => {
  const value = counter.reset();
  logger.info(`[COUNTER] zeroed ${value}`);
  res.send(value.toString()); // <-- vain numero
});

module.exports = router;