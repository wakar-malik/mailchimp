import React from "react";
import Section from "../../components/section/Section";
import styles from "./Integrations.module.css";
import Card from "../../components/card/Card";
import Heading from "../../components/heading/Heading";
import Image from "../../components/image/Image";
import Text from "../../components/text/Text";
import IMAGES from "../../utils/images";
import ArrowButton from "../../components/arrow-button/ArrowButton";

const integrationsData = [
  {
    id: 0,
    title: "Canva",
    description: "Create compelling visuals for your marketing.",
    img: IMAGES.canva,
  },
  {
    id: 1,
    title: "Mailchimp for Salesforce",
    description:
      "Sync your Mailchimp subscribers and Salesforce® leads across platforms.",
    img: IMAGES.salesforce,
  },
  {
    id: 2,
    title: "Instagram",
    description: "Promote and share your Instagram posts in email campaigns.",
    img: IMAGES.instagram,
  },
  {
    id: 3,
    title: "Shopify",
    description:
      "Sync Shopify customers, products, and purchase data to Mailchimp.",
    img: IMAGES.shopify,
  },
  {
    id: 4,
    title: "Google Analytics",
    description:
      "Unlock powerful insights with campaign, website, or landing page data.",
    img: IMAGES.google,
  },
  {
    id: 5,
    title: "WooCommerce",
    description: "Power your ecommerce store with smart marketing features.",
    img: IMAGES.woocommerce,
  },
  {
    id: 6,
    title: "QuickBooks Online",
    description: "Bring together your marketing tools and invoice data.",
    img: IMAGES.quickbooks,
  },
  {
    id: 7,
    title: "Squarespace Commerce",
    description: "Market your ecommerce business and drive sales.",
    img: IMAGES.squarespace,
  },
  {
    id: 8,
    title: "Zapier",
    description:
      "Automatically pass data between web services without a single line of code.",
    img: IMAGES.zapier,
  },
];

function Integrations() {
  return (
    <Section className={styles.integrationsSection}>
      <Section className={styles.integrationsContainer}>
        <Heading size={3}>
          Bring in more data, drive more growth with our integrations
        </Heading>
        <div className={styles.integrationsCardContainer}>
          {integrationsData.map((integrate) => (
            <Card className={styles.integrationsCard} key={integrate.id}>
              <Image
                src={integrate.img}
                alt={integrate.title}
                className={styles.integrationsCardImg}
              />

              <div className={styles.integrationsCardDetails}>
                <Heading size={1.3} className={styles.integrationsCardHeading}>
                  {integrate.title}
                </Heading>
                <Text>{integrate.description}</Text>
              </div>
            </Card>
          ))}
        </div>
        <ArrowButton>View all 300+ integrations</ArrowButton>
      </Section>
    </Section>
  );
}

export default Integrations;
