import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Hero() {
  const [count, setCount] = useState(0);
  const [rotate, setRotate] = useState("0");
  const [scrollPos, setScrollPos] = useState(0);

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
  const [word, setWord] = useState(wordArr[0]);

  function handleScroll() {
    const pos = window.scrollY;
    setScrollPos(pos);
    console.log(window.scrollY);
  }

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => (count += 1));
      setWord((word) => (word = wordArr[count]));
    }, "2000");
  }, [count]);
  return (
    <div onClick={handleScroll} className={styles.hero}>
      <div
        className={styles.heroImgHolder}
        onMouseOver={() => {
          setRotate("150%");
        }}
        onMouseLeave={() => {
          setRotate("0%");
        }}
      >
        <span
          style={{
            transform: `translateX(${rotate})`,
            transition: "transform 1s ease-in-out",
          }}
          className={styles.outHero}
          id="lineOne"
        ></span>
        <span
          style={{
            transform: `translateX(-${rotate})`,
            transition: "transform 1s ease-in-out",
          }}
          className={styles.oneInHero}
          id="lineTwo"
        ></span>
        <span
          style={{
            transform: `translateX(${rotate})`,
            transition: "transform 1s ease-in-out",
          }}
          className={styles.centerHero}
          id="lineFour"
        ></span>
        <span
          style={{
            transform: `translateX(-${rotate})`,
            transition: "transform 1s ease-in-out",
          }}
          className={styles.centerHero}
          id="lineFour"
        ></span>
        <span
          style={{
            transform: `translateX(${rotate})`,
            transition: "transform 1s ease-in-out",
          }}
          className={styles.oneInHero}
          id="lineFive"
        ></span>
        <span
          style={{
            transform: `translateX(-${rotate})`,
            transition: "transform 1s ease-in-out",
          }}
          className={styles.outHero}
          id="lineSix"
        ></span>
      </div>
    </div>
  );
}
