import React from "react";
import styles from "./Button.module.css";

function Button({ children, className = "", bg = false }) {
  const classes = `${className} ${styles.buttonContainer}`;

  return (
    <div className={classes}>
      <button
        className={styles.btn}
        style={{ backgroundColor: bg ? "var(--yellow)" : "var(--white)" }}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
