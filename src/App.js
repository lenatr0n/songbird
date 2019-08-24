import React from 'react';
import logo from './logo.svg';
import './App.css';
import chinaship from './chinaship.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import {
  createMuiTheme,
  createStyles,
  withStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { green, purple } from '@material-ui/core/colors';


function App() {

  return (
    <div className="App">

      <Router>
        <header className="App-header">
          <div className="Chinese">
鸣禽
          </div>
          <div>
            <Link to="/home">
SONGBIRD</Link>
          </div>
        </header>

        <div className="Address">
          1761 White Mountain Hwy, Tamworth, NH 03886
      </div>
        <div className="Phone">
          (603) 323-9322

        </div>

        <div className="Links">
          <Link to="/about">ABOUT</Link>
          <Link to="/menu">MENU</Link>
          <Link to="/address">LOCATION + HOURS</Link>
        </div>
        <Route exact path="/home" render={() => {
          return (
            <div className="image">
              <img src={chinaship} className="App-logo" alt="logo" />
            </div>)
        }} />
        <Route exact path="/address" render={() => {
          return <div className="GoogleMap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11512.403249491796!2d-71.2070155!3d43.8330076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf210a9b7e0650fe!2sSongbird!5e0!3m2!1sen!2sus!4v1566415385970!5m2!1sen!2sus" width="450" height="320" margin-left="0" frameborder="0" style={{ border: 0, minWidth: 450 }} allowFullScreen></iframe>
            <div className="AddressandTitle">
              <div className="AddressTitle">
                ADDRESS
</div>
              <table className="AddressText">
                1761 White Mountain Hwy, Tamworth, NH 03886
</table>

              <div className="HoursandTitle"> <header className="HoursTitle">
                HOURS
            </header>
                <table className="Hours">
                  <tbody>
                    <tr>
                      <th>Sunday</th>
                      <td>11:30am  -  9:00pm</td>
                    </tr>
                    <tr>
                      <th> Monday</th>
                      <td> CLOSED</td>
                    </tr>

                    <tr>
                      <th> Tuesday</th>
                      <td> 11:30am  -  9:00pm</td>
                    </tr>
                    <tr>
                      <th> Wednesday</th>
                      <td> 11:30am  -  9:00pm</td>
                    </tr>
                    <tr>
                      <th> Thursday</th>
                      <td> 11:30am  -  9:00pm</td>
                    </tr>
                    <tr>
                      <th>Friday</th>
                      <td>11:30am  -  10:00pm</td></tr>
                    <tr>
                      <th> Saturday</th>
                      <td> 11:30am  -  10:00pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        }} />
      </Router>
    </div>
  );
}


export default App;

