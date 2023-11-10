import React from "react";
import Section from "../../components/section/Section";
import Heading from "../../components/heading/Heading";
import Text from "../../components/text/Text";
import styles from "./GetStarted.module.css";
import IMAGES from "../../utils/images";
import Image from "../../components/image/Image";

function GetStarted() {
  return (
    <Section className={styles.getStartedSection}>
      <Section className={styles.getStartedContainer}>
        <div className={styles.getStartedLeft}>
          <Heading size={3} mb={1.5}>
            Get started easily with a personalized product tour
          </Heading>
          <Text size={1.4}>
            An onboarding specialist is here to help you get started with
            confidence—it’s included with a paid plan.*
          </Text>
        </div>
        <div className={styles.getStartedRight}>
          <Image
            src={IMAGES.getStarted}
            className={styles.getStarted}
            alt="get-started"
          />
        </div>
      </Section>
    </Section>
  );
}

export default GetStarted;
