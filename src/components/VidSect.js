import styles from "@/styles/Home.module.css";

export default function VidSect() {
  return (
    <section>
      <video
        playsInline
        muted={true}
        autoPlay
        loop
        className={styles.bigVid}
        src="/clouds.mp4"
      ></video>
    </section>
  );
}
