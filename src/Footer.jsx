import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ContactPageIcon from '@mui/icons-material/ContactPage';
const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-info text-white pb-3">
                <div className="row">
                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                        <h1 className="footer_heading"> follow me </h1>
                        <div className="col d-flex flex-column justify-content-center align-items-center footer_links  pb-3">
                            <a href="http://wa.me/+918237383424" className="whatapp"><WhatsAppIcon className="whatsappicon"></WhatsAppIcon> what's app </a>
                            <a href="http://instagram.com/er_birju_thakur" className="github"><GitHubIcon className="githubicon"></GitHubIcon> github </a>
                            <a href="mailto:birjusinghthakur@gmail.com" className="email"><EmailIcon className="emailicon"></EmailIcon> gmail</a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                        <h1 className="footer_heading">check links</h1>
                        <div className="col d-flex flex-column justify-content-center align-items-center footer_links  pb-3">
                            <NavLink className="homename" to="/"><HomeIcon className="homeicon"></HomeIcon>  home </NavLink>
                            <NavLink className="aboutname" to="/about"><PersonIcon className="abouticon"></PersonIcon>  about </NavLink>
                            <NavLink className="skillsname" to="/skills"><LocalLibraryIcon className="skillsicon"></LocalLibraryIcon>  skills </NavLink>
                            <NavLink className="contactname" to="/contact"><ContactPageIcon className="contacticon"></ContactPageIcon> contact </NavLink>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 text-capitalize text-dark footertext">
                        <h1 className="footer_heading">about me </h1>
                        <p>my name is birju thakur.</p>
                        <p>i am an mechanical engineer but web developer  by passion.</p>
                        <p>i have deep interest  in web development.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-black text-white">
                <p className="text-center m-0 p-0 text-uppercase"><b>© Copyright birju thakur. All Rights Reserved.Designed by birju thakur</b></p>
            </div>
        </>
    );
};

export default Footer;