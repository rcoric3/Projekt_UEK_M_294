import React from "react";
import ReactDOM from "react-dom/client";

import Login from "./Pages/Login";
import TaskPage from "./Pages/TaskPage";
import CreateTask from "./Pages/CreateTask";
import ShowComponents from "./Components/ShowComponents";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <TaskPage />
      <ShowComponents/>
    </React.StrictMode>
  </>
);
