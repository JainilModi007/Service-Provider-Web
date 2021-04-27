import "./CustomerDetails.css";
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import HeaderCustomer from "../Header/HeaderCustomer";

function CustomerDetails() {

  useEffect(() =>{
    var now = new Date();
       var randomNum = '';
       randomNum += Math.round(Math.random() * 9);
       randomNum += Math.round(Math.random() * 9);
       randomNum += Math.round(Math.random() * 9);
       randomNum += Math.round(Math.random() * 9);
       randomNum += now.getTime();
       window.onload = function () {
           document.getElementById("customerID").value = randomNum.substr(0,5); 
       }
 })

  const history = useHistory();
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    user: ''
  })

  function handleChange(event){
    const {name, value} = event.target;

    setInput(prevInput =>{
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  // function handleClick(event){
  //   event.preventDefault();
  //   console.log(input);
  //   const newRegister = {
  //     username: input.username,
  //     email: input.email,
  //     password: input.password,
  //     user: input.user
  //   }

    //  axios.post('http://localhost:3001/signup', newRegister).then(
    //    res => {
    //      console.log(res)
    //    }
    //  ).catch(
    //    err => {
    //      console.log(err)
    //    }
    //  )
    

  return (
    
        <div className="wrapper-customerdetails">
            <div class="title">
        Enter your details</div>
        <form method="POST">
                
                <div class="field">
                <input type="text" required name="customerName"/>
                <label>Customer Name</label>
                </div>
                <div class="field">
                    <input type="number" required name="customerID" id="customerID"/>
                    <label>Customer ID</label>
                 </div>
                <div class="content">
                
                 <div class="field">
                    <Link to="/customerhome"><input type="submit" value="Submit"/></Link>
                </div>
                </div>
            
            </form>
    </div>
      
    
  );
}

export default CustomerDetails;
