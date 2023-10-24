import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h3>HEADER</h3>
      </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="register" element={ <Register/> } />
       
      </Routes>
    </BrowserRouter>
    <div className="App-footer">
      <h4>FOOTER</h4>
    </div>
  </div>
  );
}

export default App;
