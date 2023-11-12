import { useState } from "react";
import styles from "./Accordion.module.css";
import Text from "../text/Text";
import Heading from "../heading/Heading";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const data = [
  {
    title: "Content Optimizer",
    des: "Learn how your emails compare to the top-performing campaigns in your industry and get data-driven suggestions for improving your copy, imagery, and layout.",
  },
  {
    title: "Creative Assistant",
    des: "Our Creative Assistant will help you stand out by using AI to create custom designs for your brand.",
  },
  {
    title: "GDPR ready tools",
    des: "Mailchimp helps you achieve data security and privacy standards for your customers.",
  },
];

function Accordion({ onHandleAccordion }) {
  const [accordion, setAccordion] = useState(0);

  const accordionHandler = (num) => {
    setAccordion((prev) => (prev === num ? null : num));
    onHandleAccordion(num);
  };

  return (
    <>
      <ul className={styles.accordionList}>
        {data.map((accord, index) => (
          <li
            key={index + 1}
            onClick={() => accordionHandler(index)}
            className={styles.accordionListItem}
          >
            <Text size={1.3} className={styles.accordionHeading}>
              {accord.title}
              {accordion === index ? (
                <RiArrowUpSLine style={{ fontSize: "1.5rem" }} />
              ) : (
                <RiArrowDownSLine style={{ fontSize: "1.5rem" }} />
              )}
            </Text>
            <div
              className={styles.accordionContent}
              style={{ display: accordion === index ? "block" : "none" }}
            >
              <Heading size={1.3}>{accord.des}</Heading>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Accordion;
