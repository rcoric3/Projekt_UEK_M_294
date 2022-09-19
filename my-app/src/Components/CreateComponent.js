import React, { useState, useEffect } from "react";

function CreateComponent() {
  const API = "http://localhost:3000/tasks";
  const [titles, setTitle] = useState("s767676sdfhkf");
  useEffect(() => {
    const createPost = () => {
      let res = fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: true,
          title: titles,
        }),
      });
    };

    console.log("Hello World");

    createPost();
  }, []);

  return(
    <>
    <div>
    </div>
    </>
  )
}

export default CreateComponent;
