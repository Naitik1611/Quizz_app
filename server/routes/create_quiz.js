const express = require('express');
const router = express.Router();
const quizControl = require('../create_quiz');
const validate = require('../authorization')

router.post('/create',validate, quizControl.createQuiz);
router.get('/',validate,quizControl.getAllQuizzes);
router.get('/:id',validate,quizControl.getQuizById);
router.delete('/delete/:id',validate,quizControl.deleteQuizById)

module.exports = router;
