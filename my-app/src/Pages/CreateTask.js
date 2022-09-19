import React from "react";
import CreateComponent from "../Components/CreateComponent";
import DeleteTasks from "../Components/DeleteTasks";
import FloatingActionButtons from "../Components/FloatingActionButtons";
import SendButton from "../Components/SendButton";

export default function CreateTask() {
  return (
    <div>
      <CreateComponent />
      <DeleteTasks />
      <FloatingActionButtons />
      <SendButton />
    </div>
  );
}
