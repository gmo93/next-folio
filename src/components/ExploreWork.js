import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ExploreWork() {
  const [expImage, setExpImage] = useState("/gtbDumbo.jpg");
  const [projTitle, setProjTitle] = useState("Good Time Brewing");
  const [projNumber, setProjNumber] = useState(0);

  function setPhoto(e) {
    setProjNumber(Number(e.currentTarget.getAttribute("data-projnum")));
  }
  function nextProj() {
    if (projNumber < 4) {
      setProjNumber(projNumber + 1);
    }
  }
  function prevProj() {
    if (projNumber > 0) {
      setProjNumber(projNumber - 1);
    }
  }

  const projects = [
    { title: "Good Time Brewing", photo: "/gtbDumbo.jpg" },
    { title: "Classick Studios", photo: "/back_locked_in_tee.jpg" },
    { title: "Dakota Ridge", photo: "/shopDakotaRidge.webp" },
    { title: "Studio Supers", photo: "/rope.jpg" },
    { title: "Find My Markets", photo: "/gtbDumbo.jpg" },
  ];

  return (
    <section id="projects" className={styles.exploreWorkCont}>
      <div className={styles.exploreScrollCont}>
        <div className={styles.exploreTextCont}>
          Explore a list of website owners who have gotten their doctor
          recommended 8-9 hours of sleep a night. For some of them, I built
          their sites from scratch. Others I just added features to existing
          sites.
        </div>
        <div id="exploreListCont" className={styles.exploreList}>
          <ul>
            <li
              onMouseEnter={setPhoto}
              data-projnum="0"
              data-photo="/gtbDumbo.jpg"
              data-projtitle="Good Time Brewing"
            >
              <Link href="/goodtimebrewing">
                <h4>Good Time Brewing</h4>
                <p>01</p>
              </Link>
            </li>
            <li
              onMouseEnter={setPhoto}
              data-projnum="1"
              data-photo="/back_locked_in_tee.jpg"
              data-projtitle="Classick Studios"
            >
              <Link href="/classickstudios">
                <h4>Classick Studios</h4>
                <p>02</p>
              </Link>
            </li>
            <li
              onMouseEnter={setPhoto}
              data-projnum="2"
              data-photo="/shopDakotaRidge.webp"
              data-projtitle="Dakota Ridge"
            >
              <Link href="/dakotaridge">
                <h4>Dakota Ridge</h4>
                <p>03</p>
              </Link>
            </li>
            <li
              onMouseEnter={setPhoto}
              data-projnum="3"
              data-photo="/rope.jpg"
              data-projtitle="Studio Supers"
            >
              <Link href="/studiosupers">
                <h4>Studio Supers</h4>
                <p>04</p>
              </Link>
            </li>
            <li
              onMouseEnter={setPhoto}
              data-projnum="4"
              data-photo="/gtbDumbo.jpg"
              data-projtitle="Find My Markets"
            >
              <h4>Find My Markets</h4>
              <p>05</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.exploreStat}>
        <div className={styles.exploreStatContRelative}>
          <div className={styles.exploreTopCont}>
            <div className={styles.exploreTopLeft}>
              <h3>Projects</h3>
            </div>
            <div className={styles.exploreArrows}>
              <div onClick={prevProj} className={styles.leftArrowCont}>
                <svg
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 850.21 778.37"
                  className={styles.expArrowCont}
                >
                  <g id="Layer_2-2" data-name="Layer 2">
                    <line
                      className={styles.expArrow}
                      x1="56.1"
                      y1="387.27"
                      x2="850.21"
                      y2="387.27"
                    />
                    <polyline
                      className={styles.expArrow}
                      points="411.26 28.13 56.1 387.27 411.26 750.4"
                    />
                  </g>
                </svg>
              </div>
              <div onClick={nextProj} className={styles.rightArrowCont}>
                <svg
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 850.21 778.37"
                  className={styles.expArrowCont}
                >
                  <g id="Layer_2-2" data-name="Layer 2">
                    <line
                      className={styles.expArrow}
                      x1="794.11"
                      y1="387.27"
                      x2="0"
                      y2="387.27"
                    />
                    <polyline
                      className={styles.expArrow}
                      points="438.95 28.13 794.11 387.27 438.95 750.4"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.exploreMiddleCont}>
            <div className={styles.exploreMiddleImageCont}>
              <Image
                fill
                src={projects[projNumber].photo}
                alt="Dynamic photo for clients we have worked with."
              />
            </div>
          </div>
          <div className={styles.exploreBottomCont}>
            <h4>{projects[projNumber].title}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
