import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Kartik-Page.jsx'
import Navbar from './components/shared/Navbar.jsx'
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume-Page.jsx';

function App(){
  return(
    <BrowserRouter>
    <div className='flex flex-col min-h-screen'>
      <Navbar />
    <div className='flex-1'>
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/contact" element={<Contact />} />
          <Route path ="/resume" element={<Resume />} />
        </Routes>
        
    </div>
    </div>
    
    </BrowserRouter>
    
  );

}

export default App;
