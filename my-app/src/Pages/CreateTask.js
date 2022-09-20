import React from "react";
import BasicTextFields from "../Components/BasicTextFields";
import CreateComponent from "../Components/CreateComponent";
import FloatingActionButtons from "../Components/FloatingActionButtons";
import SendButton from "../Components/SendButton";
import MenuAppBar from "../Components/MenuAppBar";

export default function CreateTask() {
  return (
    <>
      <MenuAppBar />
      <div>
        <CreateComponent />
        <FloatingActionButtons />
      </div>
    </>
  );
}
