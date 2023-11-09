import React from "react";
import { createPortal } from "react-dom";
import { drawerCtxProvider } from "../../context/DrawerContext";
import styles from "./Drawer.module.css";

function Drawer({ isDrawerActive, setIsDrawerActive }) {
  return (
    <div
      className={`${styles.drawer} ${
        isDrawerActive ? styles.drawerActive : ""
      }`}
    >
      Drawer Overlay
    </div>
  );
}

function DrawerOverlay({ isDrawerActive, setIsDrawerActive }) {
  return (
    <div
      className={isDrawerActive ? styles.overlayActive : ""}
      onClick={() => setIsDrawerActive((prev) => !prev)}
    />
  );
}

function DrawerContainer() {
  const { isDrawerActive, setIsDrawerActive } = drawerCtxProvider();

  return (
    <>
      {createPortal(
        <Drawer
          isDrawerActive={isDrawerActive}
          setIsDrawerActive={setIsDrawerActive}
        />,
        document.getElementById("root")
      )}
      {createPortal(
        <DrawerOverlay
          isDrawerActive={isDrawerActive}
          setIsDrawerActive={setIsDrawerActive}
        />,
        document.getElementById("root")
      )}
    </>
  );
}

export default DrawerContainer;
