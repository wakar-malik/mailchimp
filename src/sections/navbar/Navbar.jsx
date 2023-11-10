import React from "react";
import Logo from "../../components/logo/Logo";
import styles from "./Navbar.module.css";
import Button from "../../components/button/Button";
import MenuBtn from "../../components/menu-btn/MenuBtn";
import DrawerContainer from "../../components/drawer/Drawer";
import { IoMdSearch } from "react-icons/io";

function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navLeft}>
        <Logo />
        <p className={styles.dropDown}>Solutions and Services</p>
        <p className={styles.dropDown}>Resources</p>
        <p>Pricing</p>
      </div>

      <div className={styles.navRight}>
        <IoMdSearch
          style={{ fontSize: "1.7rem" }}
          className={styles.searchIcon}
        />

        <p className={styles.translator}>EN</p>
        <p className={styles.tele}>Sales: +1(8000) 315-5939</p>

        <Button>Log In</Button>
        <Button bg={true} className={styles.signUpBtn}>
          Sign Up
        </Button>
      </div>

      <MenuBtn className={styles.menuBtn} />

      <DrawerContainer />
    </nav>
  );
}

export default Navbar;
