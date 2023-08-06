import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <section className={styles[`footer`]}>
      <h3 className={styles[`subhed`]}>This is the footer!</h3>
    </section>
  );
};

export default Footer;
