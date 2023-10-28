const Quiz = require('./models/quiz');
const Answer = require('./models/answer');
const {User} = require('./models/user');
const Question = require('./models/questions');

exports.attemptQuiz = async (quizId, userId, answers, res) => {
    try {
      const quiz = await Quiz.findById(quizId);
      if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found' });
      }
  
      const questions = await Question.find({ _id: { $in: quiz.Questions } });
      const score = [];
      answers.forEach((answer, index) => {
      if (quiz.Questions[index]) {
        if (answer.Answer === questions[index].Correct_answer) {
            score.push(questions[index].Score);
        } 
        else {
            score.push(0); 
        }
    }
});

  
      // Create a new answer record for the user
      const userAnswer = new Answer({
        Quiz_id: quizId,
        User_id: userId,
        QuestionAnswers: answers.map((userAnswer, index) => ({
          Question_id: questions[index]._id,
          Answer: userAnswer.Answer,
          Score: score[index],
        })),
      });
  
      await userAnswer.save();
  
      // Update the user's score
      const user = await User.findOne({_id:userId});
      user.scores.push({ Quiz_id: quizId, Score: score.reduce((acc, curr) => acc + curr, 0) });
      await user.save();
  
      // Update the quiz's participant scores
      const participant = {
        user_id: userId,
        score: score.reduce((acc, curr) => acc + curr, 0),
      };
      quiz.Participants.push(participant);
      await quiz.save();
  
      res.status(201).json({ message: 'Quiz attempted successfully', score });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  exports.displayQuestions=async(req,res)=>{
    try{
      const quizId=req.params.id;
      //console.log(quizId);
      const quiz = await Quiz.findById(quizId).populate('Questions');
      console.log(quiz);
      if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found' });
      }
      const questions = quiz.Questions;
      //console.log(questions);
      const questionData = questions.map((question) => ({
        Question_text: question.Question_text,
        Options: question.Options,
      }));
      res.status(200).json({ questions: questionData });
    }catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};