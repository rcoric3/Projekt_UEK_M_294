import React from "react";
import "../Templates/Auth.css";

function Auth() {
  return (
    <>
      <main className="auth">
        <form>
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname"></input>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </main>
    </>
  );
}

export default Auth;
