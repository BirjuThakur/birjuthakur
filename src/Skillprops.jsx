import React from "react";
import Skillsdata from "./Skilldata";
import Skillcard from "./Skillcard";

const Skillprops =() =>{
    return(
        <>
        <div className="container pt-5 pb-5">
        <div className="row g-4">
        {Skillsdata.map((value)=>{
            return(
                <Skillcard 
                key ={value.id}
                imgsrc = {value.imgsrc}
                cousrse_title = {value.cousrse_title}
                course_content = {value.course_content}
                />
            )
        })}
        </div>
        </div>
        </>
    )
}

export default Skillprops;