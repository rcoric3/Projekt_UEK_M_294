import React, { useState, useEffect } from "react";
import BasicTextFields from "./BasicTextFields";
import SendButton from "./SendButton";

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
        completed: true,
        title: title,
      }),
    });
  };

  useEffect(() => {}, []);

  return (
    <>
      <BasicTextFields onChange={handleChange} />
      <SendButton onClick={handleClick} />
    </>
  );
}

export default CreateComponent;
