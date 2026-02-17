import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search placeholder="search" />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;