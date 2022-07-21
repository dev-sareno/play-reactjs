import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Help from './Help';
import Home from './Home';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/help'} element={<Help />} />
          <Route path={'/about'} element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
