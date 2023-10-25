const Quiz = require('./models/quiz');
const Question = require('./models/questions');
const User = require('./models/user');
const Joi = require('joi'); 

exports.createQuiz = async (req, res) => {
    const schema = Joi.object({
      Title: Joi.string().required(),
      Description: Joi.string(),
      Category: Joi.string().required(),
      Timer: Joi.object({
        TimerAvailable: Joi.boolean().required(),
        TimerDuration: Joi.number().when('TimerAvailable', {
          is: true,
          then: Joi.number().required(),
          otherwise: Joi.optional(),
        }),
      }).required(),
      Questions: Joi.array().items(
        Joi.object({
          Question_text: Joi.string().required(),
          Question_type: Joi.number().required(),
          Correct_answer: Joi.alternatives().try(
            Joi.string().required(),
            Joi.boolean().required()
          ),
          Explanation: Joi.string().required(),
          Score: Joi.number().required(),
          Options: Joi.array().items(Joi.string()),
          Time: Joi.number().when('TimerAvailable', {
            is: true,
            then: Joi.number().required(),
            otherwise: Joi.optional(),
          }),
        })
      ),
      //Creator_id: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const { Title, Description, Category, Timer, Questions, Creator_id } = req.body;
  
    try {
      const quiz = new Quiz({
        Title,
        Description,
        Category,
        Timer,
        Creator_id,
      });
  
      for (const questionData of Questions) {
        const question = new Question({
          ...questionData,
        });
        await question.save();
        quiz.Questions.push(question._id);
      }
  
      await quiz.save();
  
    //   const user = await User.findById(Creator_id);
    //   user.quizzes_id.push(quiz._id);
    //   await user.save();
  
      res.status(201).json({ message: 'Quiz created successfully', quiz });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };