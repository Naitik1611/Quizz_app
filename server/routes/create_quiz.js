const express = require('express');
const router = express.Router();
const { createQuiz } = require('../create_quiz');

// Define routes for quiz creation
router.post('/create', createQuiz);

module.exports = router;
