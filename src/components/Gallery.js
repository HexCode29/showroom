import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "react-bootstrap";
import {Card} from "react-bootstrap";
import Navigation from "./Nav";
 
export default function Gallery(){
    const[data, setData] = useState([]);

    useEffect(() => {
        async function getData(){
            fetch("http://localhost:8888/.netlify/functions/gallery/")
            .then((res) => res.json())
            .then((obj) => {
                setData(obj)
            })
        }
        getData();
    }, [])
   
    const divStyle = {
        width: "100%",
        marginTop: "90px",
        display: "grid",
        gridGap:" 0.5em",
        gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
        justifyItems: "center"
    }

    const cardStyle = {
      margin: "0 auto"
    }
    return(
      <>  
        <Navigation/>
        <div style={divStyle}>
            {data.map((doc) => {
                return(
                    <div style={cardStyle}>
                        <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={doc.img} />
                            <Card.Body>
                            <Card.Title>{doc.title}</Card.Title>
                                <Card.Text>
                                   {doc.desc}
                                </Card.Text>
                                <Link to="/contact" variant="primary">Make an Offer</Link>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
        </>
    )
}