import styles from "../styles/Home.module.css";

export default function StudioSuper() {
  const handlePlayVideo = (e) => {
    e.currentTarget.play();
  };

  return (
    <div className={`${styles.projCont} ${styles.studioCont}`}>
      <div className={`${styles.projPhoto} ${styles.studioPhoto}`}></div>
      <section className={`${styles.projExpl} ${styles.studioExpl}`}>
        <h1>Studio Supers</h1>
        <h2>
          Task: Create a carousel of videos, and have each video appear as if it
          is on an iphone.
        </h2>
      </section>
      <section className={`${styles.projExpl} ${styles.superExpl}`}>
        <p>
          Approaching this, I had a general idea what I wanted to do, but I
          honestly wasn&apos;t sure how I was going to pull it off. I felt like
          a mask would be my best option, but was still unsure on the execution.
        </p>
        <p>
          Here is what I ended up doing! I pulled an iphone shell png into adobe
          illustrator, and then put a rectangle behind the png to act as the
          &quot;screen&quot;. I went ahead and saved that as an svg, put the
          backing rectangle inside a &apos;foreign object&apos; inside the svg,
          and then used that as a mask for the video.{" "}
        </p>
        <video
          poster="/studioThumbnail.jpg"
          className={styles.projDemoVid}
          src="/studioCarVid.mov"
          onClick={handlePlayVideo}
        ></video>
        <p>
          Overall, I loved how it turned out. It was exactly what he was looking
          for, and was a fun challenge.
        </p>
      </section>
      {/* <section className={styles.projSect}>
        <p>
          Another thing he wanted to do was just a classick marquee, which would
          display the logos of all the companies he has worked with.{" "}
        </p>
        <div className={styles.studioMarquee}></div>
      </section> */}
    </div>
  );
}
