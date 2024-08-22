import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  function xClick() {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  }
  return (
    <header>
      <div onClick={xClick} className={styles.xCont}>
        <span className={menuOpen ? styles.xTopCross : styles.xTop}></span>
        <span
          className={menuOpen ? styles.xMiddleCross : styles.xMiddle}
        ></span>
        <span className={menuOpen ? styles.xBottomCross : ""}></span>
      </div>
      <div
        className={menuOpen ? styles.menuSliderOpen : styles.menuSliderClosed}
      >
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
}
