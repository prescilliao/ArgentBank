import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./designs/css/main.css";
import Home from "./pages/home";
import Signin from "./pages/Signin";
import Footer from "./components/Footer";
import User from "./pages/User";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

function App() {
  const { token, user } = useSelector((state) => state.auth);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/user" element={token && user ? <User /> : <Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
