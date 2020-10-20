import React from "react";
import Navigation from "./Nav";
import Header from "./Header";
import Main from "./Main";

export default function Home(){
    return(
        <div>
            <Navigation />
            <Header/>
            <Main/>
        </div>
    )
}