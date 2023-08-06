import React from "react";
import styles from "./Project.module.scss";

const Project = ({ data }) => {
  return (
    <section className={styles[`project`]}>
      <h3>{data.name}</h3>
    </section>
  );
};

export default Project;
