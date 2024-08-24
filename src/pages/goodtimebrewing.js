import { useState, useRef } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function GoodTimeBrewing() {
  const [mobile, setMobile] = useState(false);

  const handlePlayVideo = (e) => {
    e.currentTarget.play();
  };

  return (
    <section className={`${styles.projSect} ${styles.gtbSect}`}>
      <div className={`${styles.projPhoto} ${styles.gtbPhoto}`}></div>
      <div className={`${styles.projExpl} ${styles.gtbExpl}`}>
        <img
          className={styles.gtbLogo}
          src="https://cdn.shopify.com/s/files/1/0737/3232/5665/files/logo-small.webp?v=1709357195"
          height={73}
          width={150}
          alt="Good Time Brewing Logo"
        />
        <h2>Task: Build a custom website using Shopify. </h2>
        <h3>Built using: HTML, CSS, Vanilla JS, and Liquid</h3>
      </div>
      <div className={`${styles.projFirst} ${styles.gtbFirst}`}>
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
      <div className={styles.gtbFindUsCont}>
        <p>
          This next section is the &quot;Find Us&quot; section of the page,
          where users can find stores selling Good Time Brewing near them. I
          initially built this using the Google Map API, but as the company
          continued to grow, I decided to use the &apos;Storepoint&apos; app
          instead. It allowed for easier maintenace by myself and the team, as
          well as features that would&apos;ve been more costly to build from
          scratch.
        </p>
        <video
          poster="/gtbFindThumb.jpg"
          className={styles.projDemoVid}
          src="/gtbFind.mov"
          onClick={handlePlayVideo}
        ></video>
      </div>
      <div className={styles.gtbReviewCont}>
        <p>
          For the mobile &apos;About&apos; section of the site, my client
          requested a swipable timeline that allowed the user to go through and
          see every stage of Good Time&apos;s beginning. I suggested a visual
          that showed when the timeline had reached the end, or was back at the
          beginning, and implemnted that using vanilla javascript! Below is a
          video of how that turned out!{" "}
        </p>
        <video
          poster="/gtbTLThumb.jpg"
          onClick={handlePlayVideo}
          className={styles.projDemoVid}
          src="/gtbTimeline.mov"
        ></video>
      </div>
      <div className={styles.gtbReviewCont}>
        <p>
          The final thing I wanted to highlight on this site was the mobile
          review carousel I made. I used vanilla javascript to transform the div
          by the width of each review to give it a sliding effect.
        </p>
        <video
          poster="/gtbRevThumb.jpg"
          className={styles.projDemoVid}
          onClick={handlePlayVideo}
          src="/gtbReview.mov"
        ></video>
      </div>
    </section>
  );
}
