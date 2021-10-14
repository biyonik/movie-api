const express = require('express');
const MovieModel = require("../models/MovieModel");
const router = express.Router();


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async function(request, response, next) {
  const movie = new MovieModel(request.body);
  try {
    await movie.save();
    response.status(201).json(movie);
  } catch(e) {
    throw e;
  }
});

module.exports = router;
