import React from 'react';
import Navbar from './Navbar';
import Home from './home';
import Cars from './Cars/Cars';
import Contacts from './Contacts';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import
import Normalcar from './Cars/Normalcar';
import Suv from './Cars/Suv';
import Luxary from './Cars/Luxary';
import Normaldetail from './Cars/Normaldetail';
function App() {
     
  return (
    <div className='bg-primary'>
    <Router> {/* Now using BrowserRouter */}
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/Contacts" element={<Contacts />} />
     <Route path='/Normalcar' element={<Normalcar/>}/>
     <Route path='/Normalcar/:userId' element={<Normaldetail/>}/>
     <Route path='/Luxary' element={<Luxary/>}/>
     <Route path='/Luxary/:userId' element={<Normaldetail/>}/>
     <Route path='/Suv' element={<Suv/>}/>
     <Route path='/Suv/:userId' element={<Normaldetail/>}/>

      </Routes>
   <Footer/>
    </Router>
    </div>
  );
}

export default App;