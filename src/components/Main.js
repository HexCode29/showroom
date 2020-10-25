import React from "react";
import "../App.css";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import whatsapp from "../images/whatsapp.svg";
import facebook from "../images/facebook.svg";

const divStyle = {
    width: "100%",
    marginTop: "30px",
    display: "grid",
    gridGap:" 0.5em",
    gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
    justifyItems: "center"
}

const h4Style = {
    textAlign: "center",
    marginTop: "30px",
}

const h3Style = {
    textAlign: "center",
    marginTop: "30px",
}

const iframeDiv = {
    width: "100%",
    marginTop: "30px",
    display: "grid",
    gridTemplateColumns: "1fr",
    justifyItems: "center"
}

export default function Main(){
    const imgSrc = [{src: "https://i.ibb.co/3RLC5dW/uncle-shahid.png", name: "Rana Shahid Mehmood", whatsapp: true},{src:"https://i.ibb.co/17mVSpz/uncle-Abdulrehman.jpg", name: "Rana AbdulRehman", facebook: "https://facebook.com/madnimoters58"},{src: "https://i.ibb.co/4ZCnBJj/unlcleshahidnew.png", name: "Rana AttaurRehman", facebook: "https://facebook.com/rana.atta.148"}];
    return(
        <>
        <h3 style={h3Style}>Staff</h3>
        <div style={divStyle} id="mainDiv">
            {imgSrc.map((doc) => {
                return(
                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={doc.src} />
                            <Card.Body>
                            <Card.Title style={{textAlign: "center"}}>{doc.name}</Card.Title>
                                 {doc.whatsapp ?
                                    <div id="contact"> 
                                        <Link to="/contact"><img id="wapp" src={whatsapp} alt="whatsapp" /></Link>
                                    </div>    
                                    :
                                    <div id="contact"> 
                                        <Link to="/contact"><img id="wapp" src={whatsapp} alt="whatsapp" /></Link>
                                        <a href={doc.facebook} ><img id="fcbook" src={facebook} alt="facebook" /></a>
                                    </div>
                                 }
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
        <h4 style={h4Style}>View Location on Google Map</h4>
        <div style={iframeDiv}>
            <iframe style={{width:"80%", marginBottom: "20px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.619987536471!2d71.53226481444781!3d30.219391717243084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b3554bd9acd6f%3A0xf750d4c15bce946a!2sAL%20MADNI%20MOTORs%20Main%20branch!5e0!3m2!1sen!2s!4v1603126275518!5m2!1sen!2s" title="map" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        </> 
    )
}