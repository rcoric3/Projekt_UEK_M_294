import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import TaskPage from "./Pages/TaskPage";
import ShowComponents from "./Components/ShowComponents";
import CreateComponent from "./Components/CreateComponent";
import CreateTask from "./Pages/CreateTask";
import MenuAppBar from "./Components/MenuAppBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Routes>
        <Route path="/create" element={<CreateTask />} />
        <Route path="/" element={<ShowComponents />} />
      </Routes>
    </Router>
  </>
);
