'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const cors = require('cors');
const heroes = require('./heroes');

app.use(cors());

const authCheck = jwt({
  secret: new Buffer('YOUR_CLIENT_SECRET', 'base64'),
  audience: 'YOUR_CLIENT_ID'
});

app.get('/api/public/heroes', (req, res) => {
  res.json(heroes.publicHeroes);
});

app.get('/api/secret/heroes', authCheck, (req, res) => {
  res.json(heroes.secretHeroes);
});

app.get('/api/public/heroes/:id', (req, res) => {
  let hero = heroes.publicHeroes.find(hero => hero.id == req.params.id);
  if (!hero) {
    res.json({ message: 'No hero found!' });
  }
  res.json(hero);
});

app.get('/api/secret/heroes/:id', authCheck, (req, res) => {
  let hero = heroes.secretHeroes.find(hero => hero.id == req.params.id);
  if (!hero) {
    res.json({ message: 'No hero found!' });
  }
  res.json(hero);
});

app.listen(3001);
console.log('Listening on localhost:3001');