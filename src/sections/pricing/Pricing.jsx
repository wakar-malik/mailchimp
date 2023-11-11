import React from "react";
import Section from "../../components/section/Section";
import Heading from "../../components/heading/Heading";
import Text from "../../components/text/Text";
import Card from "../../components/card/Card";
import styles from "./Pricing.module.css";
import { IoMdCheckmark } from "react-icons/io";

const pricingData = [
  {
    id: 0,
    title: "Premium",
    recommended: false,
    description:
      "Scale fast with dedicated onboarding, unlimited contacts, and priority support; built for teams.",
    pricing: {
      price: 137.32,
      description: "/month for 12 months based on 10,000 contacts*",
    },
    perks: [
      "Phone & Priority Support",
      "Custom-Coded and Pre-built Email Templates",
      "Multivariate and A/B Testing",
      "Enhanced Automated Customer Journeys",
      "Dedicated Personalized Onboarding",
      "Predictive Segmentation",
      "Campaign Manager",
    ],
  },
  {
    id: 1,
    title: "Standard",
    recommended: true,
    description:
      "Sell even more with personalization, optimization tools, and enhanced automations.",
    pricing: {
      price: 5.67,
      description: "/month for 12 months based on 500 contacts*",
    },
    perks: [
      "24/7 Email & Chat Support",
      "Custom-Coded and Pre-built Email Templates",
      "Multivariate and A/B Testing",
      "Enhanced Automated Customer Journeys",
      "Personalized Onboarding",
      "Predictive Segmentation",
      "Campaign Manager",
    ],
  },
  {
    id: 2,
    title: "Essentials",
    recommended: false,
    description:
      "Send the right content at the right time with testing and scheduling features.",
    pricing: {
      price: 4.59,
      description: "/month for 12 months based on 500 contacts*",
    },
    perks: [
      "24/7 Email & Chat Support",
      "Pre-built Email Templates",
      "A/B Testing",
      "Basic Automated Customer Journeys",
      "Personalized Onboarding",
      "Predictive Segmentation",
      "Campaign Manager",
    ],
  },
  {
    id: 3,
    title: "Free",
    recommended: false,
    description:
      "Easily create email campaigns and learn more about your customers.",
    pricing: {
      price: 0,
      description: "/month based on 500 contacts*",
    },
    perks: [
      "Email support for first 30 days",
      "Pre-built Email Templates",
      "A/B Testing",
      "Basic Automated Customer Journeys",
      "Onboarding",
      "Predictive Segmentation",
      "Campaign Manager",
    ],
  },
];

function Pricing() {
  return (
    <Section className={styles.pricingSection}>
      <Text className={styles.pricingSectionSubTitle} size={1.4}>
        Limited Time Offer
      </Text>
      <Heading size={3} className={styles.pricingSectionHeading}>
        Save <span>50%</span> for 12 months
      </Heading>
      <Section className={styles.pricingContainer}>
        {pricingData.map((price) => (
          <Card className={styles.priceCard} key={price.id}>
            {price.recommended && (
              <Text className={styles.recommendedText} size={0.8}>
                Recommended
              </Text>
            )}
            <div className={styles.priceCardHeader}>
              <Heading className={styles.pricingCardHeading} size={1.2}>
                {price.title}
              </Heading>
              <Text className={styles.pricingCardText}>
                {price.description}
              </Text>
            </div>

            <div className={styles.perksListContainer}>
              <Heading className={styles.priceCardPriceText} size={1.5}>
                {price.pricing.price}
              </Heading>
              <Text>{price.pricing.description}</Text>
              <ul className={styles.perksList}>
                {price.perks.map((perk, index) => (
                  <li key={index}>
                    <Text>
                      <IoMdCheckmark
                        style={{
                          fontSize: "1.3rem",
                          flexShrink: 0,
                          fontWeight: 600,
                        }}
                      />
                      {perk}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </Section>
    </Section>
  );
}

export default Pricing;
