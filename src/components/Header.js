import React from "react";
import image from "../images/newHeader.png";



const divStyle = {
    display: "grid",
    width: "100%",
    justifyItems: "center",
}

const imgStyle = {
    width: "100%",
    marginTop: "50px"
}

export default function Header(){
    return(
        <div style={divStyle}>
          <img src={image} style={imgStyle} alt="header"/>
        </div>
    )
}