import React from "react";
import Section from "../section/Section";
import styles from "./PageNotFound.module.css";
import { Link, useRouteError } from "react-router-dom";
import Heading from "../../components/heading/Heading";
import Button from "../../components/button/Button";

function PageNotFound() {
  const error = useRouteError();

  return (
    <Section className={styles.errorSection}>
      {error.data && (
        <Heading className={styles.errorHeading} size={3}>
          Page Not Found 404
        </Heading>
      )}

      <Link to="/">
        <Button bg={true}>Home</Button>
      </Link>
    </Section>
  );
}

export default PageNotFound;
