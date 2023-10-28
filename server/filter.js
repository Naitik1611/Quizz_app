const Quiz = require('./models/quiz');
const {User}=require('./models/user');

exports.filterQuizzesByCategory = async (req, res) => {
  try {
    const { category } = req.params; 
    const quizzes = await Quiz.find({ Category: category }); 
    res.status(200).json({ quizzes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.filterQuizByPin = async (req, res) => {
  try {
    const { pin } = req.params; 
    const quiz = await Quiz.find({ Quiz_pin: pin }); 
    res.status(200).json({ quiz });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.quizHistory = async (req,res)=>{
  const user_id = req._id
  
  let user = await User.findById(user_id)
  console.log(user)
  let obj={}
  let partcipated_quizzes = user.scores.map(quiz => { obj[quiz.Quiz_id] = quiz.Score
    return quiz.Quiz_id
  });

  console.log(partcipated_quizzes);
  const quizzes = await Quiz.find({ _id: { $in: partcipated_quizzes } });
  

  return res.json({quizzes,obj})
}