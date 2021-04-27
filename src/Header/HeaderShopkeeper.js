import './Header.css';
import Dropdown from 'react-dropdown';
import {useHistory} from "react-router-dom";
import 'react-dropdown/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function HeaderShopkeeper() {

  const history = useHistory();

  const s1 = window.location.href;
  var s2 = s1.substr(s1.length - 5);
  console.log(s2);


    const options = [

      <Link to= '/addproduct'>Add product</Link> ,<Link to='/productdetails'>View Details</Link>, <Link to='/request'>Requests</Link>, <Link to='/feedback'>Feedback</Link>, <Link to='/complaint'>Complaints</Link>
      ];
 
      const options2 = [
        <Link to='/addtechnician'>Add Technician</Link>, <Link to='/techniciandetails'>details</Link> 
      ];

      

  return (
    <div className="Header">
      <div class="main-header">
    <h4 class="logo">Service Provider</h4>
    
    <div class="menu">
    <Link to='/shopkeeperhome'><h5>Home</h5></Link>
   
    <h5><Dropdown style= {{marginLeft:"0px"}} options={options} placeholder="Customer" /></h5>

    <h5><Dropdown style= {{marginLeft:"25px"}} options={options2} placeholder="Technician" /></h5>
    
    
    <Link to='/'><h5>Logout</h5></Link>
    </div>
    
  </div>
    </div>
    
  );
}

export default HeaderShopkeeper;
