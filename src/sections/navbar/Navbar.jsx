import React from "react";
import Logo from "../../components/logo/Logo";
import styles from "./Navbar.module.css";
import Button from "../../components/button/Button";
import MenuBtn from "../../components/menu-btn/MenuBtn";
import DrawerContainer from "../../components/drawer/Drawer";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../slices/loginSlice";

function Navbar() {
  const { isLoggedIn } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navLeft}>
        <Logo />
        <p className={styles.dropDown}>Solutions and Services</p>
        <p className={styles.dropDown}>Resources</p>

        <Link to="/pricing">
          <p>Pricing</p>
        </Link>
      </div>

      <div className={styles.navRight}>
        <IoMdSearch
          style={{ fontSize: "1.7rem" }}
          className={styles.searchIcon}
        />

        <p className={styles.translator}>EN</p>
        <p className={styles.tele}>Sales: +1(8000) 315-5939</p>

        {!isLoggedIn && (
          <Link to="/login" className={styles.loginBtn}>
            <Button>Log In</Button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/sign-up" className={styles.signUpBtn}>
            <Button bg={true}>Sign Up</Button>
          </Link>
        )}

        {isLoggedIn && (
          <Button
            bg={true}
            onClick={() => dispatch(logOut())}
            className={styles.signOutBtn}
          >
            Sign Out
          </Button>
        )}
      </div>

      <MenuBtn className={styles.menuBtn} />

      <DrawerContainer />
    </nav>
  );
}

export default Navbar;
