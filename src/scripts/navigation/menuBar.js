import React, { Component } from "react"; 
import {Route,Link,HashRouter} from "react-router-dom"; 
import Autofixr from "../autofixr"; 
import ManageDashBoard from "../manageDashBoard"; 
import MyDashBoard from "../myDashBoard"; 
import MyProfile from "../myProfile"; 
import LogOut from "../logOut"; 
import Rules from "../rules";
import Settings from "../settings";
import DashBoard from "../dashBoard";
import Administration from '../administration';

class MenuBar extends Component {
  render() {
    return (
      <HashRouter>
        <div className = "control">
          <nav className="navbar navbar-expand-lg">   
            <ul className="navbar-nav">
              <li><Link className="navbar-brand  mt-3" to="/autofixr" replace>Autofixr</Link></li>
              <li><Administration/></li>
              <li><DashBoard/></li>
            </ul>
          </nav>
          <div className="content">
            <Route exact path={"/autofixr"} component={Autofixr}/>
            <Route path={"/mydashboard"} component={MyDashBoard}/>
            <Route path={"/managedashboard"} component={ManageDashBoard}/>
            <Route path={"/settings"} component={Settings}/>
            <Route path={"/rules"} component={Rules}/>
            <Route path={"/myprofile"} component={MyProfile}/>
            <Route path={"/logout"} component={LogOut}/>
          </div>
        </div>
      </HashRouter>
    );
  }
} 
export default MenuBar;