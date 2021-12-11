
import React from 'react';
import NavigationBar from './navigationbar';
import { Route, Routes } from 'react-router';
import Home from './home';
import Login from './Login';
import Register from './Register';
import About from './About';


class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    );
  }
}

export default App;
