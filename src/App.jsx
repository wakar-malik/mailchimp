import React from "react";
import AppLayout from "./pages/app-layout/AppLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageNotFound from "./components/page-not-found/PageNotFound";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
