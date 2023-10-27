const Quiz = require('./models/quiz');

exports.getLeaderboard = async (req, res) => {
  try {
    const quizId = req.params.quizId;
    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    quiz.Participants.sort((a, b) => b.score - a.score);

    const leaderboard = quiz.Participants.map(participant => ({
      user_id: participant.user_id,
      score: participant.score,
    }));

    res.json(leaderboard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};