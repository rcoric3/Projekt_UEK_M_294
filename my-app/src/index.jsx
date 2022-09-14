import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import TaskPage from "./Pages/TaskPage";
import CreateTask from "./Pages/CreateTask";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
<Routes>
<Route path="/" element={TaskPage}>
<Route path="/" element={Login}>
<Route path="/" element={CreateTask}>
</Routes>
</BrowserRouter>
)
