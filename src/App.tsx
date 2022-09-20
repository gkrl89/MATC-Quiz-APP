import React from 'react';
import Navbar from './components/navbar';
import Home from './components/pages/Home'
import About from './components/pages/about'
import Contact from './components/pages/contact'
import AptEng from './components/pages/apteng';
import AptMath from './components/pages/aptmath';
import AptReason from './components/pages/aptreason';
import Personality from './components/pages/personality';
import SkillTest from './components/pages/skilltest';
import Footer from './components/footer';
import { BrowserRouter, Route , Routes } from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/apteng" element={<AptEng />} />
    <Route path="/aptmath" element={<AptMath />} />
    <Route path="/aptreason" element={<AptReason />} />
    <Route path="/personality" element={<Personality />} />
    <Route path="/skilltest" element={<SkillTest />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
 
    </>
    
  
  );
}

export default App;
