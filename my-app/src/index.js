import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Routes, IndexRoute } from "react-router";

import TaskPage from "./TaskPage";
import Login from "./Login";
import MenuAppBar from "./Components/MenuAppBar";
import CreateTask from "./Components/CreateTask";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Routes path="/" component={TaskPage}>
    <Routes component={TaskPage} />
    <Routes path="/some/where" component={MenuAppBar} />
    <Routes path="/some/otherpage" component={Login} />
  </Routes>
);
root.render(
  <Routes>
    <CreateTask />
  </Routes>
);
