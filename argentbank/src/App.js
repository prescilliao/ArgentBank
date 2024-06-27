import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import './designs/css/main.css'
import Home from './pages/home';
import Signin from './pages/Signin'
import Footer from './components/Footer';
import User from './pages/User';



function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  </>

  );
} 

export default App;
