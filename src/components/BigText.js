import styles from "@/styles/Home.module.css";
import { Black_And_White_Picture } from "next/font/google";
import { useInView, InView } from "react-intersection-observer";

export default function BigText({ tuckedIn }) {
  return (
    <section id="bigTextSect" className={styles.bigTextCont}>
      <h2>
        <span className={styles.topLine}>A good dev just</span>{" "}
        <span className={styles.middleLine}>helps you sleep</span> better.
      </h2>
      <img className={styles.zzzGif} src="/pinkZ.gif" />
    </section>
  );
}
