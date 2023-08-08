//import React from "react";
//import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import About from "./components/pages/About";
import Courses from "./components/pages/Courses";
import Home from "./components/pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
