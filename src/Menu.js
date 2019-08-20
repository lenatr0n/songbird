import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Menu(){
    return (<div>
    <h2>Menu</h2>
        <Link to="/address">Address</Link>
        <Link to="/home">Home</Link>
    </div>)
}
  
export default Menu