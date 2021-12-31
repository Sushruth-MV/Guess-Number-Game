import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Home from './pages/home';
import App from './App';
import Cards from './pages/Cards';
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/Cards" element={<Cards/>} />
    </Routes>
  </Router>,
  
  document.getElementById('root')
);
