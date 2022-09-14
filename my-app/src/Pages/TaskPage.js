import React from "react";
import MenuAppBar from "../Components/MenuAppBar";
import SendButton from "../Components/SendButton";
import FloatingActionButtons from "../Components/FloatingActionButtons";
import BasicTextFields from "../Components/BasicTextFields";

function TaskPage() {
  return (
    <div className="TaskPage">
      <MenuAppBar />
      <BasicTextFields />
      <SendButton />

      <FloatingActionButtons />
    </div>
  );
}

export default TaskPage;
