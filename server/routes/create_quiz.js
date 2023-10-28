const express = require('express');
const router = express.Router();
const quizControl = require('../create_quiz');
const token=require('../token_authentication');

router.post('/create',token, quizControl.createQuiz);
router.get('/',token,quizControl.getAllQuizzes);
router.get('/:id',token,quizControl.getQuizById);
router.delete('/delete/:id',token,quizControl.deleteQuizById)

module.exports = router;
