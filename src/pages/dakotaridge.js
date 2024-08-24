import styles from "@/styles/Home.module.css";

export default function DakotaRidge() {
  const handlePlayVideo = (e) => {
    e.currentTarget.play();
  };
  return (
    <section className={`${styles.projCont} ${styles.dkrCont}`}>
      <div className={styles.dkrHeaderImg}></div>
      <div className={`${styles.projExpl} ${styles.dkrExpl}`}>
        <h1>Dakota Ridge</h1>
        <h2>
          Task: Using Shopify, install an upsell app at checkout, and get it
          functioning properly within the current theme.{" "}
        </h2>
      </div>
      <section className={styles.projFirst}>
        <p>
          Overall, this project seemed like it was going to be straight forward.
          Literally just install an app, make a few adjustments, and be on my
          way, but I ran into an issue. There was another third party app my
          client was using that created its own cart slider, which took
          precedent over the new app&apos;s cart slider. To fix it, I had to
          uninstall the other app, and make sure that the cart click was
          triggering the correct event! All around, a super seamless install,
          but took a little bit of troublshooting.
        </p>
        <p>Below is a video the functionality at work!</p>
        <video
          className={styles.projDemoVid}
          src="/dkrDemo.mov"
          poster="/dkrThumb.jpg"
          onClick={handlePlayVideo}
        ></video>
      </section>
    </section>
  );
}
