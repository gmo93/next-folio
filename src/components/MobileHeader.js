import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [overflow, setOverflow] = useState(false);
  function xClick() {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
    setOverflow(!overflow);
    if (!overflow) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }
  function closeMenu() {
    menuOpen ? setMenuOpen(false) : "";
    setOverflow(!overflow);
  }

  useEffect(() => {
    setOverflow(!overflow);
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
            <li>Home</li>
          </Link>
          <Link onClick={closeMenu} href="/#projects">
            <li>Projects</li>
          </Link>
          <Link onClick={closeMenu} href="/#contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
