const express = require('express');
const router = express.Router();
const quizControl = require('../create_quiz');

router.post('/create', quizControl.createQuiz);
router.get('/',quizControl.getAllQuizzes);
router.get('/:id',quizControl.getQuizById);
router.delete('/delete/:id',quizControl.deleteQuizById)

module.exports = router;
