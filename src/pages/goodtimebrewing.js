import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function GoodTimeBrewing() {
  const [mobile, setMobile] = useState(false);

  return (
    <section className={styles.gtbSect}>
      <div className={styles.gtbAboutSect}></div>
      <div className={styles.gtbExpl}>
        <h1>Good Time Brewing</h1>
        <h2>Task: Build a custom website using Shopify. </h2>
        <h3>Built using HTML, CSS, Vanilla JS, and Liquid</h3>
      </div>
      <div className={styles.gtbFirst}>
        <p>
          This first section is the mobile homepage of the Good Time Brewing
          site.
        </p>
        <div className={styles.gtbFirstPhoto}></div>
      </div>
      <div className={styles.gtbPopUp}>
        <p>
          This second section shows a pop-up the user gets when they first enter
          the screen. If it is X&apos;d out, it generates a fixed tab on the
          side of the screen to make the pop-up show again, which is shown in
          the photo after.{" "}
        </p>
        <div className={styles.gtbPopUpPhoto}></div>
        <div className={styles.gtbTabPhoto}></div>
      </div>
    </section>
  );
}
