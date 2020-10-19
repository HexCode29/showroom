import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "react-bootstrap";
import {Card} from "react-bootstrap";
import Navigation from "./Nav";

 
export default function Gallery(){
    const[data, setData] = useState([]);


    useEffect(() => {
        async function getData(){
            fetch("https://hungry-hypatia-cef580.netlify.app/.netlify/functions/gallery/")
            .then((res) => res.json())
            .then((obj) => {
                console.log(obj)
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


    return(
      <>  
        <Navigation/>
        <div style={divStyle}>
            {data.map((doc) => {
                return(
                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={doc.img} />
                            <Card.Body>
                                <Card.Title>Car</Card.Title>
                                <Card.Text>
                                    {doc.desc}
                                </Card.Text>
                                <Link to="/" variant="primary">Go somewhere</Link>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
        </>
    )
}