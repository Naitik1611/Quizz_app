const Quiz = require('./models/quiz');
const {User} = require('./models/user');


exports.filterQuizzesByCategory = async (req, res) => {
  try {
    const { category } = req.params; 
    let quizzes = await Quiz.find({ Category: category }); 

    const userId = req._id
    const user = await User.findById(userId)

    quizzes = quizzes.map((quiz)=>{
      let user_type = 2
      let participated = user.scores.forEach((score)=>quiz._id.toString() === score.Quiz_id.toString())
      console.log(quiz.Creator_id, userId)
      if(quiz.Creator_id){
        if(participated)
          user_type = 1
        else if(quiz.Creator_id.toString() === userId.toString())
          user_type = 2
      }        
      return {
        ...quiz,
        user_type
      }
    })
    res.status(200).json({ quizzes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



