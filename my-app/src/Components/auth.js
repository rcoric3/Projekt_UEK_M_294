import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

function Auth() {
  return (
    <>
      <div>
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button>Login</Button>
          <Button>Create User</Button>
        </ButtonGroup>
      </div>
    </>
  );
}

export default Auth;
