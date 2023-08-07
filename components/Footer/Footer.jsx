import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <section className={styles[`footer`]}>
      <div className={styles[`footer__logoList`]}>
        <div className={styles[`footer__logoList-container`]}>
          <Link href="mailto:kv@theflyingv.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className={styles[`footer__logo-icon`]}
            />
          </Link>
        </div>
        <div className={styles[`footer__logoList-container`]}>
          <Link href="https://github.com/KevinVanstone">
            <FontAwesomeIcon
              icon={faGithub}
              className={styles[`footer__logo-icon`]}
            />
          </Link>
        </div>
        <div className={styles[`footer__logoList-container`]}>
          <Link href="https://www.linkedin.com/in/kevin-vanstone">
            <FontAwesomeIcon
              icon={faLinkedin}
              className={styles[`footer__logo-icon`]}
            />
          </Link>
        </div>
      </div>
      <h5 className={styles[`subhed`]}>Created by Kevin Vanstone</h5>
    </section>
  );
};

export default Footer;
