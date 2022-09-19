import React from "react";
import ReactDOM from "react-dom/client";

import Login from "./Pages/Login";
import TaskPage from "./Pages/TaskPage";
import ShowComponents from "./Components/ShowComponents";
import CreateComponent from "./Components/CreateComponent";
import DeleteTasks from "./Components/DeleteTasks";
import CreateTask from "./Pages/CreateTask";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <TaskPage />
    <ShowComponents />
    <CreateTask />
  </>
);
