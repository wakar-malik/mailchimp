import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "./loginSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  console.log(login);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.includes("@") || password.length < 6) {
      alert("provide proper details...");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email, password }));

    dispatch(signUp());
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Sign Up" />
      </form>
      {login.isLoggedIn && <p>Login successful...</p>}
    </>
  );
}

export default Login;
