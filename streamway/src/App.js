import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/dashboard" element={<h1>Dashboard /</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
