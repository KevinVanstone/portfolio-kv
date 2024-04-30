import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import headshot from "../../assets/images/headshot.jpeg";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import Modal from "../../components/Modal/Modal";

const headshotStyle = {
  borderRadius: "50%",
};

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [menuModal, setmenuModal] = useState(faBars);

  const handleButtonClick = () => {
    setModalVisible(true);
    setmenuModal(faX);

    if (modalVisible) {
      setModalVisible(false);
      setmenuModal(faBars);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setmenuModal(faBars);
  };

  return (
    <>
      <section className={styles[`header`]}>
        <Link href="/">
          <Image
            src={headshot}
            width={60}
            height={60}
            alt="Developer Kevin Vanstone"
            style={headshotStyle}
          />
        </Link>
        <FontAwesomeIcon
          icon={menuModal}
          onClick={handleButtonClick}
          className={styles[`menuIcon`]}
        />
      </section>
      <Modal show={modalVisible} onClose={handleCloseModal} />
    </>
  );
};

export default Header;
