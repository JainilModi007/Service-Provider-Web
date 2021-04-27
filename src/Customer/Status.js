import "../Shopkeeper/Request.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Status() {
  const [messages, setMessages] = useState([
    {
      message: "",
    },
  ]);

  useEffect(() => {
    fetch("/status")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setMessages(jsonRes));
  });

  return (
    <div className="request">
      {messages.map((message) => (
        <div className="request-card">
          <div style={{ display: "flex", justifyContent: "left" }}>
            <div>
              <p>Status : {message.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Status;
