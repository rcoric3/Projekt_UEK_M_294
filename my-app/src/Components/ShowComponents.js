import React, { useState, useEffect } from "react";
import { ListItem, TableCell, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import MenuAppBar from "./MenuAppBar";

function ShowTask(onClick) {
  const [post, getPost] = useState([]);
  const API = "http://localhost:3000/tasks";
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getPost(res);
      });
  };
  const handleClick = (e) => {
    e.preventDefault();
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getPost(res);

        for (let i = 0; i < res.length; i++) {
          console.log(res[i].id);
        }
      });
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <MenuAppBar />
      <div className="centerTable">
        <div className="tableContainer">
          <Typography className="showTaskTitle" variant="h5">
            Your Tasks:
          </Typography>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Aufgaben Nummer</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Completed</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {post.map((index) => {
                return (
                  <TableRow>
                    <TableCell>{index.id}</TableCell>
                    <TableCell>{index.title}</TableCell>
                    <TableCell>{index.completed ? "✅" : "❌"}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        id={index.id}
                        onClick={handleClick}
                      >
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Box sx={{ "& > :not(style)": { m: 1 } }}>
                        <Fab color="secondary" aria-label="edit">
                          <EditIcon />
                        </Fab>
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default ShowTask;
