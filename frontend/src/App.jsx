import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Doctor from './pages/Doctor'; // Updated to match actual file name casing
import Login from './pages/Login';
import Myappointments from './pages/Myappointments';
import About from './pages/About';
import Contact from './pages/Contact';
import Myprofile from './pages/Myprofile'; // Corrected spelling from 'Myproflie'
import Appointment from './pages/Appointment';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/doctors/:speciality" element={<Doctor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<Myprofile />} />
        <Route path="/my-appointments" element={<Myappointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;