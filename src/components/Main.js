import React from "react";


const divStyle = {
    width: "100%",
    marginTop: "30px",
    display: "grid",
    gridGap:" 0.5em",
    gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
    justifyItems: "center"    
}

const h4Style = {
    textAlign: "center"
}

export default function Main(){
    return(
        <div style={divStyle}>
            <h4 style={h4Style}>Staff</h4>
            <img src="https://i.ibb.co/17mVSpz/uncle-Abdulrehman.jpg" alt="uncle-Abdulrehman" border="0"/>
            <img src="https://i.ibb.co/3RLC5dW/uncle-shahid.png" alt="uncle-shahid" border="0"/>
            <img src="https://i.ibb.co/4ZCnBJj/unlcleshahidnew.png" alt="unlcleshahidnew" border="0"/>
        </div>
    )
}