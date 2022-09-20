import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import TaskPage from "./Pages/TaskPage";
import ShowComponents from "./Components/ShowComponents";
import CreateComponent from "./Components/CreateComponent";
import CreateTask from "./Pages/CreateTask";
import ChangeData from "./Components/ChangeData";
import MenuAppBar from "./Components/MenuAppBar";
import Auth from "./Components/Auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Routes>
        <Route path="/create" element={<CreateTask />} />
        <Route path="/home" element={<ShowComponents />} />
        <Route path="change/:id" element={<ChangeData />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </Router>
  </>
);
