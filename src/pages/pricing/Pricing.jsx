import React from "react";
import Section from "../../components/section/Section";
import styles from "./Pricing.module.css";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Pricing from "../../sections/pricing/Pricing";

function PricingPage() {
  return (
    <Section className={styles.pricingSection}>
      <Link to={-1} className={styles.pricingBackBtn}>
        <Button bg={true}>Back</Button>
      </Link>

      <Pricing />
    </Section>
  );
}

export default PricingPage;
