const Quiz = require('./models/quiz');

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

