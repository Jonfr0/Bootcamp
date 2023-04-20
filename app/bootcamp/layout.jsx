import React from "react";
import Sidebar from "../components/sidebar";
import styles from "../styles/bootcamp.module.css";

const BootcampLayout = ({ children }) => {
  return (
    <div className={styles.bootcamp_section}>
      <Sidebar />
      <div className={styles.info}>{children}</div>
    </div>
  );
};

export default BootcampLayout;
