import React, { useState, useEffect } from "react";

import BasicTextFields from "./BasicTextFields";
import SendButton from "./SendButton";
import "../Templates/CreateComponent.css";

function CreateComponent() {
  const API = "http://localhost:3000/tasks";
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: false,
        title: title,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("SUCCESSS");
          return response.json();
        } else if (response.status === 408) {
          alert("SOMETHING WENT WRONG");
          this.setState({ requestFailed: true });
        }
      })
      .then((data) => {
        this.setState({ isLoading: false, downlines: data.response });
        alert("DATA STORED");
      })
      .catch((error) => {
        this.setState({ requestFailed: true });
      });
    console.log("end call api");
  };
  useEffect(() => {}, []);

  return (
    <>
      <div className="createComponent">
        <BasicTextFields onChange={handleChange} />
        <SendButton onClick={handleClick} />
      </div>
    </>
  );
  }

export default CreateComponent;
