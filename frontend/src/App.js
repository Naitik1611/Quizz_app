import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="register" element={ <Register/> } />
       
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
