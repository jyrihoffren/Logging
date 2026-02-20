const request = require('supertest');
const { expect } = require('chai');

// Importtaa serveri (main.js) tai erillinen app-express
// HUOM: main.js täytyy exporttaa app, esim. module.exports = app;
// Tarkista, että main.js näin:

// const express = require('express');
// const app = express();
// ...
// module.exports = app;

const app = require('../src/main'); // polku main.js:ään

describe('Tally Counter REST API', () => {
  let counterValue = 0;

  it('GET /counter-read should return initial value 0', async () => {
    const res = await request(app).get('/counter-read');
    expect(res.status).to.equal(200);
    expect(Number(res.text)).to.equal(0);
  });

  it('GET /counter-increase should increase counter by 1', async () => {
    const res = await request(app).get('/counter-increase');
    expect(res.status).to.equal(200);
    expect(Number(res.text)).to.equal(1);
    counterValue = 1;
  });

  it('GET /counter-read should return 1 after increase', async () => {
    const res = await request(app).get('/counter-read');
    expect(res.status).to.equal(200);
    expect(Number(res.text)).to.equal(counterValue);
  });

  it('GET /counter-reset should reset counter to 0', async () => {
    const res = await request(app).get('/counter-reset');
    expect(res.status).to.equal(200);
    expect(Number(res.text)).to.equal(0);
    counterValue = 0;
  });

  it('GET /counter-read should return 0 after reset', async () => {
    const res = await request(app).get('/counter-read');
    expect(res.status).to.equal(200);
    expect(Number(res.text)).to.equal(counterValue);
  });

});
