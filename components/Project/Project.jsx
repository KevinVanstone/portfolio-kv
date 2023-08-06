import React from "react";
import styles from "./Project.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";

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
      <div className={styles[`project__links`]}>
        <Link href={data.name} className={styles[`project__tech-link`]}>
          View Site
          <FontAwesomeIcon
            icon={faReact}
            style={{ fontSize: 16, color: "white" }}
          />
        </Link>
        <Link href={data.name} className={styles[`project__tech-link`]}>
          View Code
          <FontAwesomeIcon
            icon={faGithub}
            style={{ fontSize: 20, color: "white" }}
          />
        </Link>
      </div>
    </section>
  );
};

export default Project;
