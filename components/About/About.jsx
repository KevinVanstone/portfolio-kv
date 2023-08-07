import React from "react";
import styles from "./About.module.scss";

const copy =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const About = () => {
  return (
    <>
      <div className={styles[`about`]}>
        <h1 className={styles[`subhed`]}>About</h1>
        <p className={styles[`about__copy`]}>{copy}</p>
      </div>
    </>
  );
};

export default About;
