import "./CustomerForm.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
import HeaderCustomer from "../Header/HeaderCustomer";

function CustomerForm() {

  useEffect(() =>{
    var now = new Date();
       var randomNum = '';
       randomNum += Math.round(Math.random() * 9);
       randomNum += Math.round(Math.random() * 9);
       randomNum += Math.round(Math.random() * 9);
       randomNum += Math.round(Math.random() * 9);
       randomNum += now.getTime();
       //alert(randomNum);
       window.onload = function () {
           document.getElementById("serviceID").value = randomNum.substr(0,5); 
       }
 })

  const [input, setInput] = useState({
    customerID: '',
    customerName: '',
    contactNo: '',
    email: '',
    address: '',
    state: '',
    city: '',
    productName: '',
    productID: '',
    date: '',
    description: '',
    shopkeeperName: '',
    shopkeeperID: ''
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
     const newRequest = {
       customerID: input.customerID,
       customerName: input.customerName,
       contactNo: input.contactNo,
       email: input.email,
       address: input.address,
       state: input.state,
       city: input.city,
       productName: input.productName,
       productID: input.serviceID,
       date: input.date,
       description: input.description,
       shopkeeperName: input.shopkeeperName,
       shopkeeperID: input.shopkeeperID
     }

     axios.post('http://localhost:3001/customerform', newRequest)
  }


  return (
    <div className="customer-form">
      <HeaderCustomer/>
      <div class="wrapper-customerform">
        <div class="title">Service Request Form</div>
        <form class="customerDetails">
        
          <div class="customer">
            <h3 style={{ color: "black" }}>Customer Details</h3>

            <div class="field">
              <input onChange={handleChange} type="text" required name="customerID" value={input.customerID}/>
              <label>Customer ID</label>
            </div>

            <div class="field">
              <input onChange={handleChange} type="text" required name="customerName" value={input.customerName}/>
              <label>Customer Name</label>
            </div>

            <div class="field">
              <input onChange={handleChange} type="number" required pattern=".{10}" name="contactNo" value={input.contactNo}/>
              <label>Contact No.</label>
            </div>

            <div class="field">
              <input onChange={handleChange} type="email" required name="email" value={input.email}/>
              <label>Email</label>
            </div>

            <div class="field address">
              <input onChange={handleChange} type="text" required name="address" value={input.address}/>
              <label>Address</label>
            </div>

            <div class="field">
              <input onChange={handleChange} type="text" required name="state" value={input.state}/>
              <label>State</label>
            </div>

            <div class="field">
              <input onChange={handleChange} type="text" required name="city" value={input.city}/>
              <label>City</label>
            </div>
          </div>

          <div class="product">
            <h3 style={{ color: "black" }}>Product Details</h3>

            <div class="field">
              <input onChange={handleChange} type="text" required name="productName" value={input.productName}/>
              <label>Product Name</label>
            </div>

            <div class="field">
              <input onChange={handleChange} type="text" required name="productID" value={input.productID}/>
              <label>Product ID</label>
            </div>

            <div class="field">
              <input onChange={handleChange} type="date" required name="date" value={input.date}/>
              <label>Expire date of warranty period</label>
            </div>

            <div class="field">
              <input onChange={handleChange} type="text" required name="description" value={input.description}/>
              <label>Description about problem ...</label>
            </div>
          </div>
          <div class="Shop">
            <h2 style={{ color: "black" }}>Shop Details</h2>

            <div class="field">
              <input onChange={handleChange} type="text" required name="shopkeeperName" value={input.shopkeeperName}/>
              <label>Shopkeeper Name</label>
            </div>

            <div class="field">
              <input onChange={handleChange} type="text" required name="shopkeeperID" value={input.shopkeeperID}/>
              <label>Shopkeeper ID</label>
            </div>
          </div>
          <div class="service">
        <h2 style={{ color: "black" }}>Service Details</h2>
        <div class="field">
              <input onChange={handleChange} type="number" required name="serviceID" value={input.serviceID} id="serviceID"/>
              <label>Service ID</label>
            </div>
        </div>

          <div class="field">
            <input onClick={handleClick} type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomerForm;
