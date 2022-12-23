// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './component/Home.js';
import Request from './component/request';

function App() {
  return (
    <div>
      <Router>
        
          <Routes>
                <Route path ="/" element ={<Home/>} />
                <Route path="/request" element ={<Request/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
