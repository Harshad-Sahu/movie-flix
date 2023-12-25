import React from "react";
import Image from "next/image";
import MovieFlix from "../../../public/Logo/MovieFlix.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <Image
        src={MovieFlix}
        alt="Logo"
        className={styles.logo}
        style={{
          objectFit: "contain",
        }}
      />
    </div>
  );
};
