const express = require('express');
const router = express.Router();
const leaderboardController = require('../leaderboard');

router.get('/:quizId', leaderboardController.getLeaderboard);

module.exports = router;