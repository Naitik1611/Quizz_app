import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home'
import CreateQuiz from './components/CreateQuiz'
import MyQuiz from './components/MyQuiz'
import QuizCategory from './components/QuizCategory'
import QuizHistory from './components/QuizHistory'
import Leaderboard from './components/Leaderboard'

import Footer from './components/Footer';
import AddQuestion from './components/AddQuestion';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Login/> <Footer/> </>} />
          <Route path="register" element={<> <Register/> <Footer/> </>} />
          <Route path="home" element={<> <Navbar/> <Sidebar/> <Home/> <Footer/> </>} />
          <Route path="create-quiz" element={<> <Navbar/> <CreateQuiz/> <Footer/> </>} />
          <Route path="add-question" element={<> <Navbar/> <AddQuestion/> <Footer/> </>} />
          <Route path="my-quiz" element={<> <Navbar/> <Sidebar/> <MyQuiz/> <Footer/> </>} />
          <Route path="quiz-category" element={<> <Navbar/> <Sidebar/> <QuizCategory/> <Footer/> </>} />
          <Route path="quiz-history" element={<> <Navbar/> <Sidebar/> <QuizHistory/> <Footer/> </>} />
          <Route path="leaderboard" element={<> <Navbar/> <Leaderboard/> <Footer/> </>} />
        
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
