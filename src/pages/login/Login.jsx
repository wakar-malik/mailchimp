import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Section from "../../components/section/Section";
import styles from "./Login.module.css";
import Button from "../../components/button/Button";
import Heading from "../../components/heading/Heading";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../../slices/loginSlice";
import Text from "../../components/text/Text";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.login);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.includes("@") || password.length < 6) {
      alert("provide proper details...");
      return;
    }

    const user = { email, password };

    dispatch(logIn(user));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <Section className={styles.loginSection}>
      <form onSubmit={handleLogin}>
        <Heading size={2} className={styles.loginHeading}>
          <span>Login</span>
          <Link to="/sign-up">
            <span>Create Account</span>
          </Link>
        </Heading>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <br />
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <br />
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <br />
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <br />

        {isLoggedIn && (
          <Text className={styles.loginSuccess} size={1.3}>
            Login successful...
          </Text>
        )}

        <div className={styles.loginBtnContainer}>
          <Link to="/">
            <Button>Home</Button>
          </Link>

          <Button className={styles.loginBtn}>Login</Button>
        </div>
      </form>
    </Section>
  );
}

export default Login;
