const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  Title: String,
  Description: String,
  Category: String,
  Questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  Creator_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  Quiz_pin: String,
  Created_at: { type: Date, default: Date.now },
  Timer: {
    TimerAvailable: Boolean,
    TimerDuration: Number,
  },
  Participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Quiz', quizSchema);
