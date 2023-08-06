import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <section className={styles[`header`]}>
      <h3 className={styles[`subhed`]}>This is the header!</h3>
    </section>
  );
};

export default Header;
