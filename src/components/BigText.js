import styles from "@/styles/Home.module.css";

export default function BigText() {
  return (
    <section className={styles.bigTextCont}>
      <h2>
        <span className={styles.topLine}>A good team just </span>{" "}
        <span className={styles.middleLine}>helps you sleep</span> better.
      </h2>
    </section>
  );
}
