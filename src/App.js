import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";




function FourOFour(){
  return(
    <div>
      <h1>Sorry, this page doesn't exist</h1>
      <p><Link to="/">Go Back &larr;</Link></p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/about" component={About}/>
       <Route exact path="/contact" component={Contact}/>
       <Route exact path="/gallery" component={Gallery}/>
       <Route  component={FourOFour}/>
      </Switch>
    </Router>
  );
}

export default App;
