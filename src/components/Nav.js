import React from "react";
import "react-bootstrap";
import {Nav} from 'react-bootstrap';
// import styled from  "styled-components";
import "../nav.css";

export default function Navigation(){
    return(
        <div id="nav">            
             <Nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a class="navbar-brand" href="/">Al-Madni Motors</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/gallery">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="/contact">Contact</a>
                    </li>
                    </ul>
                </div>
            </Nav>
          </div>
    )
}