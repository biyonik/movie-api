const express = require('express');
const router = express.Router();
const {
    get,
    getById,
    add,
    update,
    remove
} = require('../controllers/DirectorController');

router.get('/', get);

router.get('/:director_id', getById);

router.post('/', add);

router.put('/:director_id', update);

router.delete('/:director_id', remove);


module.exports = router;
