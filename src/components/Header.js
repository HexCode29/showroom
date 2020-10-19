import React from "react";
import {Link} from "react-router-dom";
import image from "../images/newHeader.png";
import {Button} from "react-bootstrap";



const divStyle = {
    display: "grid",
    gridTemplateColumns: "1fr"
}

const imageStyle = {
    width: "100%",
}

const buttonStyle = {
    position: "relative",
    top: "70%",
    left: "50%",
    transform: "translate(-50%,-50%)"
}

export default function Header(){
    return(
        <div style={divStyle}>
          <img src={image} style={imageStyle} alt="header"/>
          <Link to="/gallery"><Button style={buttonStyle}>View Cars</Button></Link>  
        </div>
    )
}