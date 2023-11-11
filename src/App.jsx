import React from "react";
import Header from "./sections/header/Header";
import Navbar from "./sections/navbar/Navbar";
import Button from "./components/button/Button";
import Login from "./pages/login/Login";
import SignUp from "./sections/sign-up/SignUp";
import { useSelector } from "react-redux";
import Experiment from "./sections/experiment/Experiment";
import GetStarted from "./sections/get-started/GetStarted";
import Pricing from "./sections/pricing/Pricing";
import ArrowButton from "./components/arrow-button/ArrowButton";

function App() {
  const login = useSelector((state) => state.login);

  console.log(login);

  return (
    <div>
      <Header />
      <Navbar />
      {!login.isLoggedIn && <SignUp />}
      <Experiment />
      <GetStarted />
      <Pricing />
      <ArrowButton>Arrow Btn</ArrowButton>
    </div>
  );
}

export default App;
