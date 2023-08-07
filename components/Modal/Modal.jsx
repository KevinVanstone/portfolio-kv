import React from "react";
import styles from "./Modal.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faX } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div className={styles[`modal-content`]}>
      <p className={styles[`modal-item`]}>
        <FontAwesomeIcon
          icon={faHome}
          style={{ fontSize: 28, color: "white", marginLeft: "5px" }}
        />
      </p>
      <p className={styles[`modal-item`]}>About</p>
      <p className={styles[`modal-item`]}>Resume</p>
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
