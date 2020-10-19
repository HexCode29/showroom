import React from "react";
import "react-bootstrap";
import {Nav} from 'react-bootstrap';
// import styled from  "styled-components";
import "../nav.css";
import {Link} from "react-router-dom";

export default function Navigation(){
    return(
        <div id="nav">            
             <Nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <Link class="navbar-brand" href="/">Al-Madni Motors</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" href="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="/gallery">Gallery</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link disabled" href="/about">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link disabled" href="/contact">Contact</Link>
                    </li>
                    </ul>
                </div>
            </Nav>
          </div>
    )
}