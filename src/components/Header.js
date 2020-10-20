import React from "react";
import {Link} from "react-router-dom";
import image from "../images/newHeader.png";
import {Button} from "react-bootstrap";



const divStyle = {
    display: "grid",
    width: "100%",
    height: "600px",
    backgroundImage: `url(${ image })`,
    backgroundSize: "cover",
    justifyItems: "center",
}

const linkStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transfrom: "translate(-50%,-50%)"
}

export default function Header(){
    return(
        <div style={divStyle}>
          <Link to="/gallery" style={linkStyle}><Button>View Cars</Button></Link>  
        </div>
    )
}