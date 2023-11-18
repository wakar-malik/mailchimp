import React, { useState, useEffect } from "react";
import Section from "../../components/section/Section";
import styles from "./SignUp.module.css";
import Button from "../../components/button/Button";
import Heading from "../../components/heading/Heading";
import { Link, useNavigate } from "react-router-dom";
import Text from "../../components/text/Text";
import { useDispatch } from "react-redux";
import { logIn } from "../../slices/loginSlice";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email.includes("@") || password.length < 6) {
      setError(true);
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email, password }));

    setError(false);
    setSuccess(true);
    dispatch(logIn({ email, password }));
  };

  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success]);

  return (
    <Section className={styles.signUpSection}>
      <form onSubmit={handleSignUp}>
        <Heading size={2} className={styles.signUpHeading}>
          <span>Sign Up</span>
          <Link to="/login">
            <span>Login</span>
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
        {error && (
          <Text size={1.3} className={styles.errorMessage}>
            Email should have (@) and password should be of 6 characters long...
          </Text>
        )}

        {success && (
          <Text size={1.3} className={styles.successMessage}>
            Sign-up successful...
          </Text>
        )}

        <div className={styles.signUpBtnContainer}>
          <Link to="/">
            <Button>Home</Button>
          </Link>

          <Button className={styles.signUpBtn} type="submit">
            Sign Up
          </Button>
        </div>
      </form>
    </Section>
  );
}

export default SignUp;
