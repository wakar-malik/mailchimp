import React from "react";
import styles from "./Footer.module.css";
import Section from "../../components/section/Section";
import Heading from "../../components/heading/Heading";

function Footer() {
  return (
    <footer className={styles.footerSection}>
      <Section className={styles.footerContainer}>
        <Section className={styles.footerTopSection}>
          <ul className={`${styles.footerList} ${styles.footerTopList}`}>
            <li>Related Links:</li>
            <li>What is SEO?</li>
            <li>What Are Chatbots? Everything Business Owners Should Know</li>
            <li>ChatGPT: What to Know About This AI Content Writing Tool</li>
          </ul>
        </Section>

        <Section className={`${styles.footerMiddleSection}`}>
          <div className={styles.products}>
            <Heading className={styles.listHeading} size={1.3}>
              Products
            </Heading>
            <ul className={styles.footerList}>
              <li>Why Mailchimp?</li>
              <li>Product Updates</li>
              <li>Email Marketing</li>
              <li>Websites</li>
              <li>Transactional Email</li>
              <li>How We Compare</li>
              <li>GDPR Compliance</li>
              <li>Security</li>
              <li>Status</li>
              <li>Mobile App</li>
            </ul>
          </div>

          <div className={styles.resources}>
            <Heading className={styles.listHeading} size={1.3}>
              Resources
            </Heading>
            <ul className={styles.footerList}>
              <li>Marketing Library</li>
              <li>Free Marketing Tools</li>
              <li>Marketing Glossary</li>
              <li>Integrations Directory</li>
            </ul>
          </div>

          <div className={styles.community}>
            <Heading className={styles.listHeading} size={1.3}>
              Community
            </Heading>
            <ul className={styles.footerList}>
              <li>Agencies & Freelancers</li>
              <li>Developers</li>
              <li>Events</li>
            </ul>
          </div>

          <div className={styles.company}>
            <Heading className={styles.listHeading} size={1.3}>
              Company
            </Heading>
            <ul className={styles.footerList}>
              <li>Our Story</li>
              <li>Newsroom</li>
              <li>Give Where You Live</li>
              <li>Careers</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div className={styles.help}>
            <Heading className={styles.listHeading} size={1.3}>
              Help
            </Heading>
            <ul className={styles.footerList}>
              <li>Our Story</li>
              <li>Newsroom</li>
              <li>Give Where You Live</li>
              <li>Careers</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </Section>
      </Section>
    </footer>
  );
}

export default Footer;
