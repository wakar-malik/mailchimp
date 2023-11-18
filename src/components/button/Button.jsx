import React from "react";
import styles from "./Button.module.css";

function Button({
  children,
  className = "",
  bg = false,
  bgColor = "#fff",
  mt = 0,
  onClick = () => {},
  type = "",
}) {
  const classes = `${className} ${styles.buttonContainer}`;

  return (
    <div className={classes} style={{ marginTop: mt }}>
      <button
        className={styles.btn}
        style={{
          backgroundColor: bg ? "var(--yellow)" : bgColor,
        }}
        onClick={onClick}
        type="submit"
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
