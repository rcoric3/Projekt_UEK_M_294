import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Pages/Login";
import TaskPage from "./Pages/TaskPage";
import ShowComponents from "./Components/ShowComponents";
import CreateComponent from "./Components/CreateComponent";
import CreateTask from "./Pages/CreateTask";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Switch>
        <Route path="/">
          <TaskPage />
        </Route>
        <Route path="/createTask">
          <CreateTask />
        </Route>
        <Route>
          <ShowComponents />
        </Route>
      </Switch>
    </Router>
  </>
);
