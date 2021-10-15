const express = require('express');
const router = express.Router();
const {
    get,
    getById,
    add,
    update,
    remove,
    topByNumber,
    between
} = require('../controllers/MovieController');

router.get('/', get);

router.get('/:movie_id', getById);

router.post('/', add);

router.put('/:movie_id', update);

router.delete('/:movie_id', remove);

router.get('/top/:number', topByNumber);

router.get('/between/:start_year/:end_year', between);

module.exports = router;
