import React from "react";
import {Link} from "react-router-dom";


const contactDiv = {
    display: "grid",
    gridTemplateCoumns: "1fr",
    justifyItems: "center",
    alignContent: "center",
    padding: "10px",
    margin: "10px"
}


export default function Contact({match}){
    console.log(match);
    return(
        <div style={contactDiv}>
            <h3>Contact to {match.params.name}</h3>
            <p> Contact No: { match.params.name === "Rana-Shahid-Mehmood" ? <mark>03008733939</mark> : match.params.name === "Rana-AbdulRehman" ?  <mark>03006360002</mark> : <mark>03027677775</mark> }</p>
            <p><a class="btn btn-primary" href="mailto:raoshahzaib009@gmail.com">Send email</a></p>
            <Link to="/">Go back</Link>
        </div>
    )
}