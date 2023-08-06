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
        <Link href="mailto:kv@theflyingv.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ fontSize: 40, color: "white", marginLeft: "5px" }}
          />
        </Link>
        <Link href="https://github.com/KevinVanstone">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ fontSize: 40, color: "white", marginLeft: "5px" }}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/kevin-vanstone">
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ fontSize: 40, color: "white", marginLeft: "5px" }}
          />
        </Link>
      </div>
      <h5 className={styles[`subhed`]}>Created by Kevin Vanstone</h5>
    </section>
  );
};

export default Footer;
