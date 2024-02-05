const express = require('express');
const {
    getSeminar,
    getSeminars
} = require('../controllers/seminarController');
const router = express.Router();

//get all seminars
router.get('/', getSeminars);

//get single seminar
router.get('/:id', getSeminar);

module.exports = router;