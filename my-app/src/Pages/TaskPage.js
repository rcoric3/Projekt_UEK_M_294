import React from "react";
import MenuAppBar from "../Components/MenuAppBar";
import SendButton from "../Components/SendButton";
import FloatingActionButtons from "../Components/FloatingActionButtons";
import BasicTextFields from "../Components/BasicTextFields";
import "../Templates/TaskPage.css";

function TaskPage() {
  return (
    <>
      <div className="TaskPage">
        <MenuAppBar />
      </div>
    </>
  );
}

export default TaskPage;
