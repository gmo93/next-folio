import styles from "@/styles/Home.module.css";

export default function DakotaRidge() {
  const handlePlayVideo = (e) => {
    e.currentTarget.play();
  };
  return (
    <div className={`${styles.projCont} ${styles.dkrCont}`}>
      <div className={`${styles.projPhoto} ${styles.dkrPhoto}`}></div>
      <section className={`${styles.projExpl} ${styles.dkrExpl}`}>
        <h1>Dakota Ridge</h1>
        <h2>
          Task: Using Shopify, install an upsell app at checkout, and get it
          functioning properly within the current theme.{" "}
        </h2>
      </section>
      <section className={styles.projFirst}>
        <p>
          Overall, this install was pretty straight forward. Install an app, and
          workout a few kinks to make sure it works with their current theme.
          The only thing I ran into was there was another app my client was
          using that created its own cart slider, which took precedent over the
          new app&apos;s cart slider. To fix it, I had to uninstall the other
          app, and make sure that the cart click was triggering the correct
          event! All around, a super seamless install, but took a little bit of
          troubleshooting.
        </p>
        <p>Below is a video the functionality at work!</p>
        <video
          className={styles.projDemoVid}
          src="/dkrDemo.mov"
          poster="/dkrThumb.jpg"
          onClick={handlePlayVideo}
        ></video>
      </section>
    </div>
  );
}
