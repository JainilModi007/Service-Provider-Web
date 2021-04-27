import './Complaints.css';
import React, { useEffect, useState } from "react";
import HeaderShopkeeper from "../Header/HeaderShopkeeper"


function Complaints() {
  const [complaints, setComplaints] = useState([
    {
      serviceID: "",
      shopkeeperID: "",
      description: ""
    },
  ]);
  

  useEffect(() => {
    fetch("/complaint")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setComplaints(jsonRes));
  });


    return (
      <div className="complaint">
        <HeaderShopkeeper/>
          <h4 style={{textAlign:"center", fontWeight:"700"}}>Complaints</h4>
          {complaints.map((complaint) => (
        <div className="complaint-card">
          <div style={{ display: "flex", justifyContent: "left" }}>
            <div>
              <p>ServiceID : {complaint.serviceID}</p>
              <p>Complaint : {complaint.description}</p>
            </div>
            <div style={{ marginLeft: "480px", position: "absolute" }}>
              <p>ShopkeeperID: {complaint.shopkeeperID}</p>
            </div>
          </div>

          <div>
            <p style={{ display: "flex" }}>
              <button
                type="button"
                class="btn btn-warning"
                style={{ borderRadius: "10px", fontWeight: "600", marginRight: "20px", marginTop:"20px"}}
              >
                Resolve
              </button>
            </p>
          </div>
        </div>
      ))}
          
          
          
        </div>  
      
    );
  }
  
  export default Complaints;
  