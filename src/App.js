// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar.js';
import Home from './component/Home.js';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Routes>
                <Route path ="/" element ={<Home/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
