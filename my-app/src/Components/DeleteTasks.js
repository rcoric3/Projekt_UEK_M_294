import React, { useState, useEffect } from "react";
import BasicTextFields from "../Components/BasicTextFields";

function DeleteTasks() {
  const [post, getPost] = useState([]);
  const API = "http://localhost:3000/tasks";

  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        for (let i = 0; i < res.length; i++) {
          console.log(res[i].id);
        }

        getPost(res);
      });
  };
  useEffect(() => {
    fetchPost();
  }, []);
}

export default DeleteTasks;
