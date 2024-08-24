import styles from "@/styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
export default function ClassickStudios() {
  const [headTitle, setHeadTitle] = useState("");
  const [count, setCount] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const [trans, setTrans] = useState("translateX(100vw)");
  const [slideCount, setSlideCount] = useState(0);
  const header = "Classick Studios";

  let direction = false;

  const ref = useRef(null);
  const handlePlayVideo = (e) => {
    e.currentTarget.play();
  };

  useEffect(() => {
    let typer = setTimeout(() => {
      if (count < header.length - 1) {
        setCount((count) => (count += 1));
      }
      setHeadTitle((title) => (title += header[count]));
      console.log(headTitle);
    }, "250");
  }, [count]);

  return (
    <div id="classick" className={`${styles.projCont} ${styles.classCont}`}>
      <section className={styles.projBack}></section>
      <section className={`${styles.projExpl} ${styles.classExpl}`}>
        <h1>
          {headTitle ? headTitle : ""}
          <span className={styles.underScore}>_</span>
        </h1>
        <div className={styles.classExpl}>
          <h2>
            Task: Using Squarespace, build a custom sizing selection feature.
          </h2>
          <p>
            This first image is the reference that was sent to me when I was
            contacted about this project. This client wanted to add some flavor
            to their product page, so instead of Squarespace&apos;s standard
            dropdown sizing option, they wanted locks to represent each size,
            which is shown below in the mock.
          </p>
          <div className={styles.classExplPhoto}></div>
        </div>
      </section>
      <section className={styles.classDemo}>
        <p>
          This next section shows the page in action! Each lock acts as a size
          selector. To do this, I originally was building it from scratch using
          data-attributes that Squarespace already has in place. But as I was
          poking around, I found out they have a hidden sizing selection section
          that can be used in place of their standard size dropdown.
        </p>
        <p>
          Once I got the buttons working, the final task was to have the buttons
          interact with Squarespace&apos;s DB, and deactivate any size button
          that was out of stock. To do that, I just used vanilla js to pull
          data-attributes already provided by Squarespace, and applied them to
          the associated lock.
        </p>
        <video
          onClick={handlePlayVideo}
          poster="/lockedInDemoThumb.jpg"
          className={styles.projDemoVid}
          src="lockedInDemo.mov"
        ></video>
      </section>
      <section className={styles.stripeSect}>
        <Image
          src="/stripeLogo.png"
          alt="Stripe logo"
          width={268}
          height={151}
        ></Image>
      </section>
    </div>
  );
}
