import React, { useState, useEffect } from "react";
import BasicTextFields from "../Components/BasicTextFields";

function ShowTask() {
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

  return (
    <>
      <h2></h2>

      <ul>
        {post.map((item, i) => {
          return <p key={i}>{item.title}</p>;
        })}
      </ul>
    </>
  );
}

export default ShowTask;
