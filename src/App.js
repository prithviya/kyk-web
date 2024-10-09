// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './component/Home.js';
import Navbar from './component/Navbar.js';
import Terms from './component/terms.jsx';
import Privacy from './component/privacy.jsx';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Routes>
                <Route path ="/" element ={<Home/>} />
                <Route path ="/Terms" element ={<Terms/>} />
                <Route path ="/Privacy" element ={<Privacy/>} />
          </Routes>
          <div className='custom-get-section'>
                  <div class="">
                    <div data-uk-navbar>

                        <div class="uk-navbar-left">

                            <ul class="uk-navbar-nav">
                              <p className='uk-text-center'>© 2024 Know your Karmaa. All rights reserved</p>
                            </ul>

                        </div>

                        <div class="uk-navbar-right">

                            <ul class="uk-navbar-nav">
                                <li class="">
                                  <a href="/terms" rel="noreferrer noopener" className='uk-text-capitalize text-white'>
                                      Terms & Conditions
                                  </a>
                                </li>
                                <li class="">
                                  <a href="/privacy" rel="noreferrer noopener" className='uk-text-capitalize text-white'>
                                      Privacy Policy
                                  </a>
                                </li>
                            </ul>

                        </div>

                    </div>
            </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
