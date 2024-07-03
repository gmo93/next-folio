import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

export default function Hero() {
  const [count, setCount] = useState(0);
  const wordArr = ["Brainstorm", "Blueprint", "Cry", "Buildout"];
  const [word, setWord] = useState(wordArr[0]);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => (count += 1));
      setWord((word) => (word = wordArr[count]));
    }, "2000");
  }, [count]);
  return (
    <div className={styles.hero}>
      <p id="bstorm" className={styles.heroTextLeft}>
        {word}
      </p>
    </div>
  );
}
