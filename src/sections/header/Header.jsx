import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <p>Save 50% for 12 months</p>
      <p>
        - limited time offer. <span>Get started today</span>
      </p>
    </header>
  );
}

export default Header;
