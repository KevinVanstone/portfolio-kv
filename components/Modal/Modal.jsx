import React from "react";
import styles from "./Modal.module.scss";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faX } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div className={styles[`modal-content`]}>
      <Link href="/">
        <p className={styles[`modal-item`]}>
          <FontAwesomeIcon
            icon={faHome}
            style={{ fontSize: 28, color: "white", marginLeft: "5px" }}
          />
        </p>
      </Link>
      {/* <Link href="/about">
        <p className={styles[`modal-item`]}>About</p>
      </Link> */}
      <Link href="/pdfs/Kevin-Vanstone-CV.pdf">
        <p className={styles[`modal-item`]}>Resume</p>
      </Link>
      <p onClick={onClose} className={styles[`modal-item`]}>
        <FontAwesomeIcon
          icon={faX}
          style={{ fontSize: 28, color: "white", marginLeft: "5px" }}
          onClick={onClose}
        />
      </p>
    </div>
  );
};

export default Modal;
