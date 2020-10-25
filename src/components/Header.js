import React from "react";
import {Link} from "react-router-dom";
import image from "../images/newHeader.png";
import {Button} from "react-bootstrap";



const divStyle = {
    display: "grid",
    width: "100%",
    justifyItems: "center",
}

const linkStyle = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transfrom: "translate(-50%,-50%)"
}

const imgStyle = {
    width: "100%",
}

export default function Header(){
    return(
        <div style={divStyle}>
          <img src={image} style={imgStyle} alt="header"/>
          <Link to="/gallery" style={linkStyle}><Button>View Cars</Button></Link>  
        </div>
    )
}