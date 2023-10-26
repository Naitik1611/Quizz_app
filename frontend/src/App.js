import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home'
import CreateQuiz from './components/CreateQuiz'

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
       
      </Routes>
    </BrowserRouter>

  </div>
  );
}

export default App;
