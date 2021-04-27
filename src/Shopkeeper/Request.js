import "./Request.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HeaderShopkeeper from "../Header/HeaderShopkeeper"


function Request() {

  const s1 = window.location.href;
  var s2 = s1.substr(30, 40);
  console.log(s2);
  const [requests, setRequests] = useState([
    {
      customerID: "",
      customerName: "",
      contactNo: "",
      email: "",
      address: "",
      city: "",
      productName: "",
      productID: "",
      date: "",
      description: "",
      shopkeeperName: "",
      shopkeeperID: ""
    },
  ]);

  useEffect(() => {
    
      fetch("/request")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setRequests(jsonRes));
    
  });

  const [input, setInput] = useState({
    message: ''
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

   function handleClick(event){
     
     event.preventDefault();
     console.log(input);
      const newMessage = {
        message: input.message
      }

      axios.post("/message", newMessage)
   }



  return (
    <div className="request">
      <HeaderShopkeeper/>
      {requests.filter((request) => {
        if(request.shopkeeperID.includes(s2)){
          return request
        }
      }).map((request) => (

      
        <div className="request-card">
          <div style={{ display: "flex", justifyContent: "left" }}>
            <div>
              <p>CustomerID : {request.customerID}</p>
              <p>Contact No : {request.contactNo}</p>
              <p>Address : {request.address}</p>
              <p>Product : {request.productName}</p>
              <p>Description : {request.description}</p>
            </div>
            <div style={{ marginLeft: "480px", position: "absolute" }}>
              <p>Customer Name : {request.customerName}</p>
              <p>Email : {request.email}</p>
              <p>City : {request.city}</p>
              <p>ProductID : {request.productID}</p>
            </div>
          </div>

          <div>
            <p style={{ visibility: "hidden" }}>Hello</p>
            <p style={{ display: "flex" }}>
              <Link to="/message"><button
                type="button"
                class="btn btn-warning"
                style={{ borderRadius: "10px", fontWeight: "600" }}
              >
                Accept
              </button>
              </Link>
            </p>
            <p style={{ visibility: "hidden" }}>Hello</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Request;
