import "./App.css";
import React from 'react';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/checkout" element={[<Header/>, <Checkout/>]} />
      <Route path="/" element={[<Header />, <Home />]} />
     </Routes>
    </div>
    </Router>
  );
}

export default App;
  