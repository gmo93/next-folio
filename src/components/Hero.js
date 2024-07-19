import { useCallback, useEffect, useRef, useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Hero({ scroll, rotate, scale, opacity }) {
  const [count, setCount] = useState(0);

  const wordArr = [
    "Brainstorm",
    "Blueprint",
    "Buildout",
    "Believe",
    "Troubleshoot",
    "Problem Solve",
    "Ponder",
    "Create",
    "Envision",
    "Learn",
  ];

  return (
    <div id="heroCont" className={styles.hero}>
      <section className={styles.heroFirst}>
        <div
          className={styles.heroImgHolder}
          style={{
            transform: `rotate(${rotate}deg) scale(${scale})`,
            transition: "transform .5s ease-in-out",
            opacity: { opacity },
          }}
        >
          <span
            style={{
              transform: `translateX(${scroll}%)`,
              transition: "transform .5s ease-in-out",
              opacity: { opacity },
            }}
            className={styles.outLeftHero}
            id="lineOne"
          ></span>
          <span
            style={{
              transform: `translateX(-${scroll}%)`,
              transition: "transform .5s ease-in-out",
              opacity: { opacity },
            }}
            className={styles.oneInLeftHero}
            id="lineTwo"
          ></span>
          <span
            style={{
              transform: `translateX(${scroll}%)`,
              transition: "transform .5s ease-in-out",
              opacity: { opacity },
            }}
            className={styles.centerLeftHero}
            id="lineFour"
          ></span>
          <span
            style={{
              transform: `translateX(-${scroll}%)`,
              transition: "transform .5s ease-in-out",
              opacity: { opacity },
            }}
            className={styles.centerRightHero}
            id="lineFour"
          ></span>
          <span
            style={{
              transform: `translateX(${scroll}%)`,
              transition: "transform .5s ease-in-out",
              opacity: { opacity },
            }}
            className={styles.oneInRightHero}
            id="lineFive"
          ></span>
          <span
            style={{
              transform: `translateX(-${scroll}%)`,
              transition: "transform .5s ease-in-out",
              opacity: { opacity },
            }}
            className={styles.outRightHero}
            id="lineSix"
          ></span>
        </div>
      </section>
      <section className={styles.heroSecond}></section>
    </div>
  );
}
