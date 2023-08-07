import React from "react";
import styles from "./Project.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHandPointer } from "@fortawesome/free-regular-svg-icons";

const Project = ({ data }) => {
  return (
    <section className={styles[`project`]}>
      <Link href={data.site} className={styles[`project__button-subhedLink`]}>
        <h2 className={styles[`project__tech-subhed`]}>{data.name}</h2>
      </Link>
      <div className={styles[`project__tech`]}>
        <p className={styles[`project__tech-name`]}>{data.tech}</p>
        <p className={styles[`project__tech-name`]}>{data.tech2}</p>
        <p className={styles[`project__tech-name`]}>{data.tech3}</p>
      </div>
      <p className={styles[`project__tech-desc`]}>{data.description}</p>
      <div className={styles[`project__buttons`]}>
        {data.site && (
          <Link href={data.site} className={styles[`project__button-link`]}>
            View Site
            <FontAwesomeIcon
              icon={faHandPointer}
              style={{ fontSize: 20, color: "white", marginLeft: "5px" }}
            />
          </Link>
        )}
        {data.github && (
          <Link href={data.github} className={styles[`project__button-link`]}>
            View Code
            <FontAwesomeIcon
              icon={faGithub}
              style={{ fontSize: 20, color: "white", marginLeft: "5px" }}
            />
          </Link>
        )}
      </div>
    </section>
  );
};

export default Project;
