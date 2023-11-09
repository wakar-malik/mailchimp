import React from "react";
import { IoMdMenu } from "react-icons/io";
import styles from "./MenuBtn.module.css";
import { drawerCtxProvider } from "../../context/DrawerContext";

function MenuBtn({ className }) {
  const { setIsDrawerActive } = drawerCtxProvider();
  const classes = `${styles.menuIcon} ${className}`;

  return (
    <div onClick={() => setIsDrawerActive((prev) => !prev)}>
      <IoMdMenu className={classes} />
    </div>
  );
}

export default MenuBtn;
