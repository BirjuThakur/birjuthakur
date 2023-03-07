import React, { useState } from "react";
import './index.css';

const Contact = () => {
const [oldvalue,newvalue]=useState({
    fullname:" ",
    email:" ",
    number:" ",
    message:" "
});
  const InputEvent =(event)=>{
  const {name,value} = event.target;
  newvalue((prevalue)=>{
    return{
        ...prevalue,
        [name]:value
    }
  })
  }
  const onsubmit=(event)=>{
    event.preventDefault();
    window.alert("form submitted successfully")
  }
    return (
        <>
            <div className="container pb-5">
                <h1 className="text-center pt-3 pb-3 text-uppercase contactheading">contact me</h1>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 order-1 pt-3">
                        <figure>
                            <img src="images/contact.png" alt="contact" className="img-fluid contactimage" 
                            style={{width:"100%",height:"500px"}}/>
                        </figure>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 d-flex flex-column justify-content-center
                     align-items-center order-0 formscontact">
                        <h1>{ oldvalue.fullname} {oldvalue.email } { oldvalue.number}</h1>
                        <form >
                            <label htmlFor="fullname">enter your name : </label><br />
                            <input type="text" name="fullname" id="fullname" value={oldvalue.fullname}
                            onChange={InputEvent} /><br /><br />
                            <label htmlFor="email">enter your email : </label><br />
                            <input type="email" name="email" id="email" value={oldvalue.email}
                            onChange={InputEvent} /><br /><br />
                            <label htmlFor="mobile">enter your number : </label><br />
                            <input type="number" name="number" id="number" value={oldvalue.number}
                            onChange={InputEvent} /><br /><br />
                            <label htmlFor="mesage">send me meassage : </label><br />
                            <textarea name="message" id="message" cols="22" rows="4" value={oldvalue.message} 
                            onChange={InputEvent} ></textarea><br /><br />
                            <button className="btn btn-success" onSubmit={onsubmit}> submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;