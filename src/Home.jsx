import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';

const Home =() =>{
    return(
        <>
        <div className="container-fluid homeimage">
        <h1 className="pt-5 pb-3">i am birju thakur</h1>
        <h2 className="pb-3">web developer </h2>
        <NavLink to="/about"><button className="btn btn-primary text-uppercase">about me </button></NavLink>
        </div>
        </>
    );
};

export default Home;