import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles[`hero`]}>
      <h1 className={styles[`hed`]}>Kevin Vanstone</h1>
      <h2 className={styles[`subhed`]}>
        Web Developer, Vancouver British Columbia
      </h2>
    </section>
  );
};

export default Hero;
