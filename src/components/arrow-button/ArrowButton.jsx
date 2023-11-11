import React from "react";
import styles from "./ArrowButton.module.css";
import { IoMdArrowForward } from "react-icons/io";

function ArrowButton({ children }) {
  return (
    <>
      <button className={styles.arrowBtn}>
        <span>{children}</span>
        <IoMdArrowForward className={styles.arrowIcon} />
      </button>
    </>
  );
}

export default ArrowButton;
