const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  Title: String,
  Category: String,
  Questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  Creator_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  Quiz_pin: Number,
  Created_at: { type: Date, default: Date.now },
  Timer: {
    TimerAvailable: Boolean,//1 for no, 2 for quiz timer, 3 for per q timer
    TimerDuration: Number,
  },
  Participants: [
    {
      user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      score: Number,
    },
  ],
});

module.exports = mongoose.model('Quiz', quizSchema);
