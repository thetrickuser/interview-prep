import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Java Interview Mastery",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Master Java fundamentals, OOP concepts, data structures, and algorithms
        with comprehensive interview questions and explanations.
      </>
    ),
  },
  {
    title: "Spring Boot Excellence",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Dive deep into Spring Boot, microservices, REST APIs, and enterprise
        development patterns essential for backend interviews.
      </>
    ),
  },
  {
    title: "React Development Skills",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Build strong React foundations with hooks, state management, performance
        optimization, and modern frontend development techniques.
      </>
    ),
  },
  {
    title: "SQL Query Proficiency",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Learn database design, complex queries, optimization, and data modeling
        to ace database-related interview questions.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
