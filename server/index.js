require("dotenv").config();
const express=require("express");
const app=express();
//const cors=require("cors");
const connection=require("./db");
const userRoutes=require("./routes/users");
const authRoutes=require("./routes/auth");
const createQuizRoutes=require('./routes/create_quiz');
const attemptQuizRoute=require('./routes/attempt_quiz');
const leaderboardRoute=require('./routes/leaderboard');
const filterRoute=require('./routes/filter');


try {
    connection();
    
    app.use(express.json());
    //app.use(cors());
  
    app.use("/api/users", userRoutes);
    app.use("/api/auth", authRoutes);
    app.use('/quiz', createQuizRoutes);
    app.use('/attempt_quiz', attemptQuizRoute);
    app.use('/leaderboard', leaderboardRoute);
    app.use('/filter', filterRoute);
  
    const port = process.env.PORT || 8080;
    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (error) {
    console.error("An error occurred:", error);
  }