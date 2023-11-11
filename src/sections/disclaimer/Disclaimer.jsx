import React from "react";
import Section from "../../components/section/Section";
import Heading from "../../components/heading/Heading";
import styles from "./Disclaimer.module.css";

const disclaimerData = [
  {
    title:
      "Availability of features and functionality varies by plan type. For details, view plans and pricing.",
  },
  {
    title:
      "Core marketing functionality has been translated to Spanish, French, German, Italian and Portuguese. Certain features, functionality and messaging within the Mailchimp app are not translated. Mailchimp users must be logged into their account to update language preferences.",
  },
  {
    title:
      "Intuit Assist functionality (beta) is available to certain users with Premium, Standard Legacy plans in select countries in English only. Access to Intuit Assist is available at no additional cost at this time. Pricing, terms, conditions, special features and service are subject to change without notice. Availability of features and functionality varies by plan type. Features may be broadly available soon but represents no obligation and should not be relied on in making a purchasing decision.",
  },
  {
    title:
      "Generate up to 4X more orders with Customer Journey Builder automations based on orders generated through user's connected stores with automations versus when they used bulk emails.",
  },
  {
    title:
      "Get up to 88% more revenue based on emails sent with predicted segments against non-predictive segmented emails for users with connected stores only. Standard or Premium Plans only.",
  },
  {
    title:
      "This information contains forward-looking statements, including our expectations regarding the functionality and availability of current or future features. Because these forward-looking statements involve risks and uncertainties, there are important factors that could cause our actual results to differ materially from these expectations, as described in our SEC filings. This represents no obligation to deliver future features and should not be relied on in making a purchasing decision. Additional terms, conditions, and fees may apply.",
  },
  {
    title:
      "Email Content Generator available to select US Standard and Premium plan users.",
  },
];

function Disclaimer() {
  return (
    <Section className={styles.disclaimerSection}>
      <Section className={styles.disclaimerContainer}>
        <Heading>*Disclaimer</Heading>
        <ul>
          {disclaimerData.map((disclaim, index) => (
            <li key={index}>
              {index + 1}. {disclaim.title}
            </li>
          ))}
        </ul>
      </Section>
    </Section>
  );
}

export default Disclaimer;
