import React from "react";
import "./index.css";

const Skillscards = (props) => {
    return (
        <>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 cardset">
                <div className="card cardmain" style={{width:"100%",height:"420px",
                 boxShadow:" 2px 2px 5px black",zIndex:'1'}}>
                    <img src={props.imgsrc} className="card-img-top img-fluid"
                        alt="skill" style={{ width: '100%', height: '300px' }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.cousrse_title}</h5>
                        <p className="card-text">{props.course_content}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skillscards;