import React from "react";
import { IoMdMenu } from "react-icons/io";
import styles from "./MenuBtn.module.css";
import { handleDrawer } from "../../slices/drawerSlice";
import { useDispatch, useSelector } from "react-redux";

function MenuBtn({ className }) {
  const classes = `${styles.menuIcon} ${className}`;
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(handleDrawer())}>
      <IoMdMenu className={classes} />
    </div>
  );
}

export default MenuBtn;
