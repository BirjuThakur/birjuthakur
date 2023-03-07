import React from "react";
import "./about.css";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const About =() =>{
    return(
        <>
        <div className="container-fluid pt-5 pb-5">
        <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 aboutclass">
        <figure></figure>
        </div><div className="col-12 col-sm-6 col-md-6 col-lg-6 text-capitalize abouttext pb-5">
        <p> my name is birju thakur. </p>
        <p>i have deep interest  in <mark>web development.</mark></p>
        <p> i am an mechanical engineer but web developer by passion.</p>
        <p>i have been doing web development from 2021 as front-end as well as backend developer. </p>
        <p> i have skills likes html-5, css-3, javascript, bootstrap-5, node.js, mongodb, react.js, jquery, postman, github. </p>
        <p>my contact number is <CallIcon></CallIcon> <a href="tel:+918237383424" id="call" > +918237383424. </a> </p>
        <p>my mail id is <EmailIcon></EmailIcon> <a href="mailto:birjusinghthakur@gmail.com" id="mail">birjusinghthakur@gmail.com</a></p>
        <p> my address is india nagar, latur-413512.</p>
        </div>
        </div>
        </div>
        </>
    );
};

export default About;