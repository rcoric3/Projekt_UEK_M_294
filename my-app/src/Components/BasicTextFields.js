import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../Templates/TaskPage.css";

export default function BasicTextFields({ onChange }) {



  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="BasicTextFields">
        <TextField
          id="outlined-basic"
          label="TITEL"
          variant="outlined"
          onChange={onChange}
        />
      </div>
    </Box>
  );
}
