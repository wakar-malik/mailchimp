import React, { useState } from "react";
import Section from "../../components/section/Section";
import styles from "./Customers.module.css";
import Heading from "../../components/heading/Heading";
import Accordion from "../../components/accordion/Accordion";
import Image from "../../components/image/Image";
import IMAGES from "../../utils/images";

const customersData = [
  {
    img: IMAGES.customers1,
  },
  {
    img: IMAGES.customers2,
  },
  {
    img: IMAGES.customers3,
  },
];

function Customers() {
  const [customer, setCustomer] = useState(0);

  const handleAccordion = (num) => {
    setCustomer(num);
  };

  return (
    <Section className={styles.customersSection}>
      <Section className={styles.customersContainer}>
        <div className={styles.customersLeft}>
          <Heading size={2}>
            Keep customers ready to buy with <span>engaging content</span>
          </Heading>
          <Accordion onHandleAccordion={handleAccordion} />
        </div>
        <div className={styles.customersRight}>
          <Image
            src={customersData[customer].img}
            alt="customer-img"
            className={styles.customersImg}
          />
        </div>
      </Section>
    </Section>
  );
}

export default Customers;
