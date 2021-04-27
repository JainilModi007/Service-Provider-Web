import "./ShopkeeperDetails.css";
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

function Message() {


  const history = useHistory();
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

      axios.post('http://localhost:3001/message', newMessage)
    } 

  return (
    
        <div className="wrapper-shopkeeperdetails">
            <div class="title">
        Enter message</div>
        <form method="POST">
                
                <div class="field">
                <input onChange={handleChange} type="text" required name="message" value={input.message}/>
                <label>Type message...</label>
                </div>
                <div class="content">
                
                 <div class="field">
                    <Link to="/shopkeeperhome"><input  type="submit" value="Submit"/></Link>
                </div>
                </div>
            
            </form>
    </div>
      
    
  );
}

export default Message;
