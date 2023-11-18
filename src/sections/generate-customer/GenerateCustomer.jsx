import React, { useState, useRef, useEffect } from "react";
import Section from "../../components/section/Section";
import Heading from "../../components/heading/Heading";
import styles from "./GenerateCustomer.module.css";
import Image from "../../components/image/Image";
import IMAGES from "../../utils/images";

function GenerateCustomer() {
  const [intersecting, setIntersecting] = useState(false);

  const containerRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const callBackFn = (entries) => {
    const [entry] = entries;

    setIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFn, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return (
    <Section
      className={`${styles.generateCustomerSection} ${
        intersecting ? styles.sticky : ""
      }`}
    >
      <Heading size={3} className={styles.generateCustomerHeading}>
        Generate up to 4x more orders* with Customer Journey Builder automations
      </Heading>

      <Section className={styles.generateCustomerContainer}>
        <div className={styles.generateCustomerLeft}>
          <Image src={IMAGES.animateSvg} />
        </div>

        <div className={styles.generateCustomerRight}>
          <div
            className={styles.generateCustomerTextContainer}
            ref={containerRef}
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam, iure!
            </p>
          </div>

          <div
            className={styles.generateCustomerTextContainer}
            ref={containerRef}
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam, iure!
            </p>
          </div>

          <div
            className={styles.generateCustomerTextContainer}
            ref={containerRef}
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam, iure!
            </p>
          </div>

          <div
            className={styles.generateCustomerTextContainer}
            ref={containerRef}
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam, iure!
            </p>
          </div>
        </div>
      </Section>
    </Section>
  );
}

export default GenerateCustomer;
