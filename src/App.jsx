import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from "./Navbar";
import Error from "./Error";
import Footer from "./Footer";

const App =() =>{
  return(
    <>
    <Navbar />
    <Routes>
    <Route  path='/' element={<Home />} />
    <Route  path='/about' element={<About />} />
    <Route  path='/skills' element={<Skills />} />
    <Route  path='/contact' element={<Contact />} />
    <Route path="*" element={<Error />}/>
    </Routes>
    <Footer />
    </>
  );
};

export default App;