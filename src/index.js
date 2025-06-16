import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
 
);
