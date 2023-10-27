const express = require('express');
const router = express.Router();
const filterbyCategory = require('../filter'); 

router.get('/:category', filterbyCategory.filterQuizzesByCategory);

module.exports = router;