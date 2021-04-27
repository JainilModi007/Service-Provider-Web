import './Header.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function HeaderTechnician() {
    const options = [
        <Link to='/'>Details</Link>, <Link to='/request'>Requests</Link>, <Link to='/feedbacks'>Feedback</Link>, <Link to='/'>Complaints</Link>
      ];
  return (
    <div className="Header">
      <div class="main-header">
    <h4 class="logo">Service Provider</h4>
    
    <div class="menu">
    <Link to='/'><h5>Home</h5></Link>
   
    <h5><Dropdown style= {{marginLeft:"0px"}} options={options} placeholder="Customer" /></h5>
    
    <Link to='/'><h5>Logout</h5></Link>
    </div>
    
  </div>
    </div>
    
  );
}

export default HeaderTechnician;
