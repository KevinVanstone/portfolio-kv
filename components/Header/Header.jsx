import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import headshot from "../../assets/images/headshot.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import Modal from "../../components/Modal/Modal";

const headshotStyle = {
  borderRadius: "50%",
};

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <section className={styles[`header`]}>
        <Image
          src={headshot}
          width={60}
          height={60}
          alt="Developer Kevin Vanstone"
          style={headshotStyle}
        />
        <FontAwesomeIcon
          icon={faBars}
          style={{ fontSize: 40, color: "white", marginLeft: "5px" }}
          onClick={handleButtonClick}
        />
      </section>
      <Modal show={modalVisible} onClose={handleCloseModal} />
    </>
  );
};

export default Header;
