import './Header.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function HeaderCustomer() {
  const options = [
    <Link to='/servicecategory'>Request Service</Link>, <Link to='/requesthistory'>Request History</Link>, <Link to='/feedbackform'>Feedback</Link>, <Link to='/complaintform'>Complaint</Link>];

    
    
  return (
    <div className="Header" marginTop="100px !important">
      <div class="main-header" >
    <h4 class="logo">Service Provider</h4>
    
    <div class="menu">
    <Link to='/customerhome'><h5>Home</h5></Link>
    
    <h5><Dropdown style= {{marginLeft:"0px"}} options={options} placeholder="Services" /></h5>
    <Link to='/about'><h5>About us</h5></Link>
    <Link to='/'><h5>Logout</h5></Link>
    </div>
    
  </div>
    </div>
    
  );
}

export default HeaderCustomer;
