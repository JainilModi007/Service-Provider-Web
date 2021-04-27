import "./Request.css";
import React, { useEffect, useState } from "react";
import HeaderShopkeeper from "../Header/HeaderShopkeeper"

function TechnicianDetails() {
  const [technicians, setTechnicians] = useState([
    {
      technicianID: "",
      technicianName: "",
      contactNo: "",
      email: "",
      workingField: "",
      experience: ""
    },
  ]);

  useEffect(() => {
    fetch("/techniciandetails")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setTechnicians(jsonRes));
  });

  return (
    <div className="request">
      <HeaderShopkeeper/>
      {technicians.map((technician) => (
        <div className="request-card">
          <div style={{ display: "flex", justifyContent: "left" }}>
            <div>
              <p>Technician ID : {technician.technicianID}</p>
              <p>Contact No : {technician.contactNo}</p>
              <p>Working Field : {technician.workingField}</p>
            </div>
            <div style={{ marginLeft: "480px", position: "absolute" }}>
              <p>Technician Name : {technician.technicianName}</p>
              <p>Email : {technician.email}</p>
              <p>Past Experience : {technician.experience}</p>
            </div>
          </div>

          <div>
            <p style={{ visibility: "hidden" }}>Hello</p>
            <p style={{ display: "flex" }}>
              
              
            </p>
            <p style={{ visibility: "hidden" }}>Hello</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechnicianDetails;
