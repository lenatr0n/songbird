import React from 'react';
import logo from './logo.svg';
import './App.css';
import chinaship from './chinaship.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Menu from './Menu'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          SONGBIRD
</div>
      </header>

      <Router>
        <div>
        <links className = "Links">
          
        <Link to="/address">Address</Link>
        <Link to="/home">Home</Link>
        </links>
        </div>

        <Route exact path="/address">
              <secondheader className="Address">
              <div>
                1761 White Mountain Hwy, Tamworth, NH 03886
                
              <hr width="300," height="500">
                </hr>
              </div>
            </secondheader>
        </Route>

        <Route exact path="/home" render={()=>{
          return ( 
            
          <div className="image">
            <img src={chinaship} className="App-logo" alt="logo" />
          </div>)
          }} />

      </Router>
      
      
    </div>
  );
}

export default App;