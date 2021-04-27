import './Feedbacks.css';
import React, { useEffect, useState } from "react";
import HeaderShopkeeper from "../Header/HeaderShopkeeper"




function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([
    {
      serviceID: "",
      exp: "",
      comment: ""
    },
  ]);

  useEffect(() => {
    fetch("/feedback")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setFeedbacks(jsonRes));
  });


    return (
      <div className="feedback">
          <HeaderShopkeeper/>
        
          <h4 style={{textAlign:"center", fontWeight:"700"}}>Feedbacks</h4>
          {feedbacks.map((feedback) => (
        <div className="feedback-card">
          <div style={{ display: "flex", justifyContent: "left" }}>
            <div>
              <p>ServiceID : {feedback.serviceID}</p>
              <p>Comments : {feedback.comment}</p>
            </div>
            <div style={{ marginLeft: "480px", position: "absolute" }}>
              <p>exp: {feedback.exp}</p>
            </div>
          </div>

          <div>
            <p style={{ display: "flex" }}>
              <button
                type="button"
                class="btn btn-warning"
                style={{ borderRadius: "10px", fontWeight: "600", marginRight: "20px", marginTop:"20px"}}
              >
                Edit
              </button>
            </p>
          </div>
        </div>
      ))}
          
          
          
        </div>  
      
    );
  }
  
  export default Feedbacks;
  