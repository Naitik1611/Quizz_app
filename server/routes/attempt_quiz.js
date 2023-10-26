const express = require('express');
const router = express.Router();
const quizController = require('../attempt_quiz');

router.post('/:id', async (req, res) => {
  const quizId = req.params.id;
  const { userId, answers } = req.body;

  try {
    const result = await quizController.attemptQuiz(quizId, userId, answers, res);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
