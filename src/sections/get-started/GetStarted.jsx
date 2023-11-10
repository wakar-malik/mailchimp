import React from "react";
import Section from "../../components/section/Section";
import Heading from "../../components/heading/Heading";
import Text from "../../components/text/Text";
import styles from "./GetStarted.module.css";

function GetStarted() {
  return (
    <Section className={styles.getStartedSection}>
      <div className={styles.getStartedLeft}>
        <Heading>Get started easily with a personalized product tour</Heading>
        <Text>Get started easily with a personalized product tour</Text>
      </div>
      <div className={styles.getStartedRight}></div>
    </Section>
  );
}

export default GetStarted;
