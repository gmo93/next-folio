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

  const activeDot = {
    width: "90px",
    height: "10px",
    border: "1px solid white",
    margin: "15px",
    cursor: "pointer",
  };
  const inactiveDot = {
    width: "90px",
    height: "10px",
    border: "1px solid white",
    margin: "15px",
    cursor: "pointer",
    position: "relative",
  };

  let direction = false;

  function handleClick(e) {
    setTrans(e.target.getAttribute("data-transform"));
    setSlideCount((number) => {
      setPrevSlide(slideCount);
      return Number(e.target.getAttribute("data-slide"));
    });
  }

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
    <div id="classick" className={styles.projCont}>
      <div
        className={styles.projBack}
        style={{
          background: 'url("/lockedInTee.jpg") center / contain repeat',
        }}
      ></div>
      <div
        className={styles.projHero}
        style={{
          background: 'url("/smallLocks.jpg") center / 101% no-repeat',
        }}
      >
        <h1>
          {headTitle ? headTitle : ""}
          <span className={styles.underScore}>_</span>
        </h1>
        <div className={styles.taskCont}>
          <div
            className={styles.horTaskCont}
            style={{ transform: `${trans}`, transition: "transform 1s" }}
          >
            <div className={styles.indTaskCont}>
              <p>
                <span style={{ fontWeight: "600" }}>
                  {" "}
                  Task At Hand:<br></br>
                </span>{" "}
                Create a project page for a t-shirt drop through an existing
                Squarespace site.
              </p>
            </div>
            <div className={styles.indTaskCont}>
              <p>
                <span style={{ fontWeight: "600" }}>
                  The Challenge:<br></br>
                </span>{" "}
                Not just have the standard sizing dropdown menu. Instead, they
                wanted the sizing options to be different &quot;locks&quot;, and
                as each size sold out, the lock would represent that.
              </p>
            </div>
            <div className={styles.indTaskCont}>
              <p>
                <span style={{ fontWeight: "600" }}>
                  How the Challenge Was Navigated:<br></br>
                </span>{" "}
                As I was going through and building out this functionality, I
                realized Squarespace had a hidden element that was the option
                for clickable sizes, as opposed to the standard dropdown. From
                there, I used the data attributes provided by Squarespace, the
                &quot;quantity in stock&quot; in particular, to make the lock
                partially transparent, and no longer clickable when that size
                had sold out. Most of this build just required some vanilla js.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.dotCont}>
          <span
            data-transform="translateX(100vw)"
            data-slide="0"
            onClick={handleClick}
            style={inactiveDot}
            id="dotOne"
          >
            <span
              className={
                slideCount === 0 ? styles.dotFilled : styles.dotNotFilled
              }
              style={{
                right: "0",
              }}
            ></span>
          </span>
          <span
            data-slide="1"
            data-transform="translateX(0vw)"
            onClick={handleClick}
            style={inactiveDot}
            id="dotTwo"
          >
            <span
              className={
                slideCount === 1 ? styles.dotFilled : styles.dotNotFilled
              }
              style={
                (prevSlide === 0 && slideCount === 1) ||
                (prevSlide === 1 && slideCount === 0)
                  ? { left: "0" }
                  : { right: "0" }
              }
            ></span>
          </span>
          <span
            data-slide="2"
            data-transform="translateX(-100vw)"
            onClick={handleClick}
            style={inactiveDot}
            id="dotThree"
          >
            <span
              className={
                slideCount === 2 ? styles.dotFilled : styles.dotNotFilled
              }
              style={{ left: "0" }}
            ></span>
          </span>
        </div>
      </div>
      <Image
        src="/bigLocks.png"
        height="300"
        width="500"
        style={{
          objectFit: "contain",
          margin: "0 auto",
        }}
        alt="First half of the T-Shirt Mockup for a checkout feature on the Classick Studios website."
      ></Image>
      <div className={styles.lockedVidCont}>
        <video
          playsInline
          autoPlay
          muted
          src="/lockedInVid.mov"
          className={styles.lockedVid}
        ></video>
      </div>
    </div>
  );
}
