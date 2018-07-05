import React, { Component } from "react";
import ReactDOM from "react-dom";
import MenuBar from "./menuBar";
import Profile from '../profile';

class Header extends Component {
  render() {
    return (  
      <div>
        <MenuBar/>
        <Profile/>
      </div>
    ) 
  }
}
export default Header;
