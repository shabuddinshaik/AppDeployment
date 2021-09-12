import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Tech from "./Stuff";
import Contact from "./Contact";

 
class Main extends Component {
  render() {
    return (
	   <HashRouter>
        <div>
          <h1>DevOps Consulting</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Tech</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
		    <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Tech}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
	   </HashRouter>
    );
  }
}
 
export default Main;

