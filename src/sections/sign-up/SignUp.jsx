import React from "react";
import Section from "../../components/section/Section";
import styles from "./SignUp.module.css";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Section className={styles.signUpSection}>
      <h1 className={styles.signUpHeading}>Turn Emails into Revenue</h1>
      <p className={styles.signUpPara}>
        Win new customers with the #1 email marketing and automations brand*
        that recommends ways to get more opens, clicks, and sales.
      </p>

      <Link to="/sign-up">
        <Button bg={true}>Sign Up</Button>
      </Link>
    </Section>
  );
}

export default SignUp;
