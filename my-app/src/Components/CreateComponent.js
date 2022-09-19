import React, { useState, useEffect } from "react";

function CreateComponent() {
  const [post, getPost] = useState([]);
  const API = "http://localhost:3000/tasks";
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getPost(res);
      });
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return <div>CreateComponent</div>;
}

export default CreateComponent;
