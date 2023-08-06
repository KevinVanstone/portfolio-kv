import React from "react";
import styles from "./Project.module.scss";

const Project = ({ data }) => {
  return (
    <section className={styles[`project`]}>
      <h3 className={styles[`project__tech-subhed`]}>{data.name}</h3>
      <div className={styles[`project__tech`]}>
        <p className={styles[`project__tech-name`]}>{data.tech}</p>
        <p className={styles[`project__tech-name`]}>{data.tech2}</p>
        <p className={styles[`project__tech-name`]}>{data.tech3}</p>
      </div>
      <p className={styles[`project__tech-desc`]}>{data.description}</p>
    </section>
  );
};

export default Project;
