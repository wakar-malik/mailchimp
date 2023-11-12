import React from "react";
import styles from "./Heading.module.css";

function Heading({
  children,
  size = 1,
  className = "",
  lineHeight = 1,
  block = false,
}) {
  const classes = `${styles.heading} ${className}`;

  return (
    <h1
      style={{
        fontSize: `${size}rem`,
        lineHeight: lineHeight,
      }}
      className={classes}
    >
      {children}
    </h1>
  );
}

export default Heading;
