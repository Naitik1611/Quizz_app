import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home'

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Login/> <Footer/> </>} />
        <Route path="register" element={<> <Register/> <Footer/> </>} />
        <Route path="home" element={<> <Navbar/> <Sidebar/> <Home/> <Footer/> </>} />
       
      </Routes>
    </BrowserRouter>

  </div>
  );
}

export default App;
