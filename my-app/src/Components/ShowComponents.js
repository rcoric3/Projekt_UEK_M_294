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

      <thead>
        <tr>
          <th>Title</th>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        {post.map((item) => {
          return (
            <tr>
              <td>{item.title}</td>
              <td>{item.completed ? "✅" : "❌"}</td>
            </tr>
          );
        })}
      </tbody>

      {post.map((item, i) => {
        return <p key={i}>{item.title}</p>;
      })}
    </>
  );
}

export default ShowTask;
