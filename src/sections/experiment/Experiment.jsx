import React from "react";
import Section from "../../components/section/Section";
import styles from "./Experiment.module.css";
import IMAGES from "../../utils/images";
import Image from "../../components/image/Image";
import Button from "../../components/button/Button";
import Text from "../../components/text/Text";
import Heading from "../../components/heading/Heading";

function Experiment() {
  return (
    <>
      <Section className={styles.experimentSection}>
        <div className={styles.convert}>
          <div className={styles.convertImgSection}>
            <Heading size={1.9} className={styles.expHeading}>
              Convert with email automation
            </Heading>
            {/* <h2>Convert with email automation</h2> */}

            <div className={styles.imgContainer}>
              <Image
                src={IMAGES.convert}
                alt="convert"
                className={styles.convertImg}
              />
            </div>
          </div>

          <div className={styles.subConvert}>
            <Text size="1.2rem">
              Boost orders and customer lifetime value by dynamically
              personalizing emails based on browsing and purchase data.
            </Text>
            <Button bgColor="#d99536">Explore marketing automation</Button>
          </div>
        </div>

        <div className={styles.create}>
          <div className={styles.createImgSection}>
            <Heading size={1.9} className={styles.expHeading}>
              Create faster with generative AI
            </Heading>

            <div className={styles.imgContainer}>
              <Image
                src={IMAGES.create}
                alt="create"
                className={styles.createImg}
              />
            </div>
          </div>
          <div className={styles.subCreate}>
            <Text size="1.2rem">
              Effortlessly create on-brand content with generative AI tools and
              choose from expertly designed templates.
            </Text>
            <Button bgColor="#f6f6f4">Explore AI tools</Button>
          </div>
        </div>

        <div className={styles.refine}>
          <div className={styles.refineImgSection}>
            <Heading size={1.9} className={styles.expHeading}>
              Refine with segmentation
            </Heading>

            <div className={styles.imgContainer}>
              <Image
                src={IMAGES.refine}
                alt="refine"
                className={styles.refineImg}
              />
            </div>
          </div>
          <div className={styles.subRefine}>
            <Text size="1.2rem">
              Target customers with advanced logic like spend amounts, buying
              behavior, and predicted attributes.
            </Text>
            <Button bgColor="#e7b75f">Explore audience management</Button>
          </div>
        </div>

        <div className={styles.optimize}>
          <div className={styles.createImgSection}>
            <Heading size={1.9} className={styles.expHeading}>
              Optimize with analytics & reporting
            </Heading>

            <div className={styles.imgContainer}>
              <Image
                src={IMAGES.optimize}
                alt="optimize"
                className={styles.optimizeImg}
              />
            </div>
          </div>

          <div className={styles.subOptimize}>
            <Text size="1.2rem">
              Analyze performance with custom reports, funnel visualizations,
              and industry benchmarking.
            </Text>
            <Button bgColor="#fbeeca">Explore analytics & marketing</Button>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Experiment;
