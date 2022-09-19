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
        <BasicTextFields />
        <SendButton />
        <FloatingActionButtons  />
      </div>
      <p>hallo</p>
    </>
  );
}

export default TaskPage;
