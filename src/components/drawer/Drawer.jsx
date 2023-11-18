import React from "react";
import { createPortal } from "react-dom";
import styles from "./Drawer.module.css";
import { handleDrawer } from "../../slices/drawerSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { logOut } from "../../slices/loginSlice";

function Drawer({ dispatch }) {
  const { isOpened } = useSelector((state) => state.drawer);
  const { isLoggedIn } = useSelector((state) => state.login);

  return (
    <div className={`${styles.drawer} ${isOpened ? styles.drawerActive : ""}`}>
      <div
        className={styles.closeDrawer}
        onClick={() => dispatch(handleDrawer())}
      >
        <IoMdClose style={{ fontSize: "1.5rem" }} />
      </div>

      <Link to="/pricing" onClick={() => dispatch(handleDrawer())}>
        <p style={{ textAlign: "center" }}>Pricing</p>
      </Link>

      {!isLoggedIn ? (
        <div className={styles.drawerActionContainer}>
          <Link to="/login" onClick={() => dispatch(handleDrawer())}>
            <Button>Login</Button>
          </Link>

          <Link to="/sign-up" onClick={() => dispatch(handleDrawer())}>
            <Button bg={true}>Sign Up</Button>
          </Link>
        </div>
      ) : (
        <Link onClick={() => dispatch(logOut())}>
          <Button bg={true}>Sign Out</Button>
        </Link>
      )}
    </div>
  );
}

function DrawerOverlay({ dispatch }) {
  const { isOpened } = useSelector((state) => state.drawer);

  return (
    <div
      className={isOpened ? styles.overlayActive : ""}
      onClick={() => dispatch(handleDrawer())}
    />
  );
}

function DrawerContainer() {
  const dispatch = useDispatch();

  return (
    <>
      {createPortal(
        <Drawer dispatch={dispatch} />,
        document.getElementById("root")
      )}
      {createPortal(
        <DrawerOverlay dispatch={dispatch} />,
        document.getElementById("root")
      )}
    </>
  );
}

export default DrawerContainer;
