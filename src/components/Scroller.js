import styles from "@/styles/Home.module.css";

export default function Scroller() {
  return (
    <div className={styles.scrollerCont}>
      <section className={styles.scrollerOne}></section>
      <section className={styles.scrollerTwo}></section>
    </div>
  );
}
