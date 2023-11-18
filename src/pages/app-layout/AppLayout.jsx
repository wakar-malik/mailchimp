import { useEffect } from "react";
import Experiment from "../../sections/experiment/Experiment";
import GetStarted from "../../sections/get-started/GetStarted";
import Pricing from "../../sections/pricing/Pricing";
import Integrations from "../../sections/integrations/Integrations";
import Disclaimer from "../../sections/disclaimer/Disclaimer";
import Customers from "../../sections/customers/Customers";
import Footer from "../../sections/footer/Footer";
import Header from "../../sections/header/Header";
import Navbar from "../../sections/navbar/Navbar";
import SignUp from "../../sections/sign-up/SignUp";
import { useSelector } from "react-redux";

function AppLayout() {
  const login = useSelector((state) => state.login);

  return (
    <>
      <Header />
      <Navbar />
      {!login.isLoggedIn && <SignUp />}
      <Experiment />
      <GetStarted />
      <Pricing />
      <Customers />
      <Integrations />
      <Disclaimer />
      <Footer />
    </>
  );
}

export default AppLayout;
