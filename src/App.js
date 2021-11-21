import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import About from './About';
import Home from './home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav>
            <ul id="navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </div>
    );
  }
}

export default App;
