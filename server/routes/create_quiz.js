const express = require('express');
const router = express.Router();
const quizControl = require('../create_quiz');
const token=require('../token_authentication');

router.post('/create',token, quizControl.createQuiz);
router.get('/',token,quizControl.getAllQuizzes);
router.get('/byId/:id',token,quizControl.getQuizById);
router.get('/byPin/:pin',token,quizControl.getQuizByPin);
router.delete('/delete/:id',token,quizControl.deleteQuizById)

module.exports = router;
