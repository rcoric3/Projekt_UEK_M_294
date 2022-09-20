import React from "react";
import { Link } from "react-router-dom";
import "../Templates/Auth.css";

function Auth() {
  const API = "http://localhost:3000/tasks";

  const Login = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/auth/cookie/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "email",
        password: "password",
      }),
    });
    const Logout = () => {
      console.log(Logout);
    };

    return (
      <>
        <main className="auth">
          <form onClick={Login}>
            <label for="usrEmail">Email:</label>
            <input type="text" id="usrEmail" name="usrEmail"></input>
            <label for=" usRName">User Name:</label>
            <input type="text" id=" usRName" name="usRName"></input>
            <label for="usrPassword">Password</label>
            <input type={"text"} id="usrPassword" name="usrPassword"></input>

            <input type="submit" value="Submit">
              <Link to={"/home"}></Link>
            </input>
          </form>
        </main>
      </>
    );
  };
}

export default Auth;
