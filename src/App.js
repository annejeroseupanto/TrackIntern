import React from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;
