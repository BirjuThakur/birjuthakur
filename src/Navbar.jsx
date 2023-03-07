import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import "./index.css";

const Navbar = () =>{
    return(
        <>
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
    <div className="container-fluid navbar_link">
    <NavLink id="navbarbrand" className="navbar-brand" to="/">birju thakur</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/"><HomeIcon className="homeicon"></HomeIcon>Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about"><PersonIcon className="abouticon"></PersonIcon>about</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/skills"><LocalLibraryIcon className="skillsicon"></LocalLibraryIcon>skills</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact"><ContactPageIcon className="contacticon"></ContactPageIcon>contact</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </>
    );
};

export default Navbar;