import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [overflow, setOverflow] = useState(false);
  function xClick() {
    setMenuOpen(!menuOpen);
    setOverflow(!overflow);
    console.log("menuOpen: " + menuOpen);
  }
  function closeMenu() {
    setMenuOpen(false);
    setOverflow(false);
    console.log(menuOpen);
  }

  useEffect(() => {
    document
      .getElementById("projects-btn")
      .addEventListener("click", closeMenu);
    document.getElementById("home-btn").addEventListener("click", closeMenu);
    document.getElementById("contact-btn").addEventListener("click", closeMenu);
    setOverflow(!overflow);

    if (overflow) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [menuOpen]);

  return (
    <header>
      <div onClick={xClick} className={styles.xCont}>
        <span className={menuOpen ? styles.xTopCross : styles.xTop}></span>
        <span
          className={menuOpen ? styles.xMiddleCross : styles.xMiddle}
        ></span>
        <span
          className={menuOpen ? styles.xBottomCross : styles.xBottom}
        ></span>
      </div>
      <div
        className={menuOpen ? styles.menuSliderOpen : styles.menuSliderClosed}
      >
        <ul>
          <Link href="/">
            <li id="home-btn">Home</li>
          </Link>
          <Link href="/#projects">
            <li id="projects-btn">Projects</li>
          </Link>
          <Link href="/#contact">
            <li id="contact-btn">Contact</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
