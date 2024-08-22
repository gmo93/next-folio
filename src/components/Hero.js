import styles from "@/styles/Home.module.css";
export default function Hero({ heroScroll, bigScroll }) {
  return (
    <section className={styles.heroSect}>
      <div className={styles.heroTextCont}>
        <h1>
          Front End Dev<br></br> JS / HTML / CSS / React / Next.JS
        </h1>
        <p className={styles.heroMission}>
          <span
            style={{
              color: "#d65858",
              fontWeight: "600",
            }}
          >
            The Mission:{" "}
          </span>
          Help you and your team get a good night&apos;s rest.{" "}
          <span
            style={{
              color: "#d65858",
              fontWeight: "600",
            }}
          >
            How?
          </span>{" "}
          Code. Create. Care. Listen. Adjust. Learn. Support.
        </p>
      </div>
      <div className={styles.heroLogoSide}>
        <svg
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 626.68 491.53"
          className={heroScroll}
        >
          <g id="Layer_2-2" data-name="Layer 2">
            <path
              className={styles.pillowTwo}
              d="M25.12,176.69S.84,161.8.51,146.17s9.31-45.89,19.62-46.89c10.31-1,28.6,4.66,32.26,18.95,0,0,21.28-9.64,39.9-16.29s54.2-25.27,118.05-39.57,106.08-21.95,174.25-29.6c68.17-7.65,79.81-6.98,81.81-7.65S478.7-.15,491.01.51c12.3.67,26.27,14.96,19.62,40.57,0,0,28.93,41.24,43.23,74.49s42.23,104.75,48.55,178.24c0,0,32.26,30.26,21.62,45.23-10.64,14.96-37.58-2.33-39.57-1.66s-99.76,52.21-197.86,77.15c-98.1,24.94-158.29,26.6-187.89,29.6s-39.24,8.65-44.23,18.95c-4.99,10.31-9.64,27.6-17.62,27.93s-27.27-4.99-34.58-28.93,6.65-29.6,7.65-31.92-1.33,4.32-22.28-34.92S21.46,260.75,25.12,176.69Z"
            />
            <path
              className={styles.pillowOne}
              d="M24.62,160.55s-18.4-5.99-16.63-25.05,10.86-30.37,14.19-30.82,14.19,5.32,20.62,14.41,5.99,7.76,9.09,7.09,32.15-17.07,43.01-20.17,25.05-7.76,47.66-16.85,117.5-38.13,202.41-45.45c84.91-7.32,120.38-9.09,123.93-9.98s5.32-2.44,6.21-5.1,11.53-23.28,17.96-22.83,14.19,11.97,12.86,20.62-.44,7.32-4.88,5.1-5.1,2.66-4.43,5.54,22.83,20.84,40.46,56.09c17.62,35.25,41.57,106.75,46.56,142.66,4.99,35.91,9.31,51.54,4.66,68.17,0,0-.58,1.33,1.5,1.33s2-1.16,4.82-1.75,9.39-.17,14.8,8.4c5.4,8.56,16.21,21.86,10.89,24.44s-33.59-10.97-36.83-9.98-76.71,43.92-168.04,68.75c-91.34,24.83-164.5,35.47-208.39,36.36s-54.09,19.95-58.97,28.82c-4.88,8.87-5.87,24.5-14.08,24.05s-24.39-19.95-23.5-30.82,3.33-22.61,9.31-23.72c5.99-1.11,15.3,9.98,17.74,11.08s1.33-5.99.67-8.2-8.29-10.42-11.79-11.31-7.26-2.22-7.71-3.55-46.12-60.36-62.97-122.43c-16.85-62.07-22.17-92-22.61-112.18s-1.11-48.11-3.1-49.22-3.66,12.03-5.38,26.46Z"
            />
            <path
              className={styles.pillowTwo}
              d="M45.44,176.73c-2.39-.38-4.5,1.55-4.34,3.96,1.32,19.99,12.84,159,81.88,221.05,0,0,1.86,1.39,3.1-.86s-1.5-58.94-5.24-80.23-11.11-58.75-27.74-89.79c-14.11-26.33-36.91-52.43-47.67-54.15Z"
            />
            <path
              className={styles.pillowThree}
              d="M59.31,259.06s21.98,95.63,53.68,125.34c0,0,3.88,5.21,5.21,0s.89-59.08-14.85-112.95-46.78-80.03-49.22-82.69c0,0-5.54-4.88-5.38,1.33s8.09,65.62,10.56,68.97Z"
            />
            <path
              className={styles.pillowTwo}
              d="M52.78,221.54s14.19-9.98,23.28-10.86l2,3.55s-14.63,4.43-24.5,12.41l-.78-5.1Z"
            />
            <path
              className={styles.pillowTwo}
              d="M61.31,265.44s14.19-9.53,18.73-11.42,12.64-4.43,20.95-3.66l.89,2.66s-9.98-.55-18.95,3.77-21.17,12.19-21.17,12.19l-.44-3.55Z"
            />
            <path
              className={styles.pillowTwo}
              d="M110.75,282.06s-7.21-1.77-18.29,2-21.62,13.75-21.62,13.75l.78,2.77s15.85-9.98,20.62-11.86,12.19-5.21,18.95-3.99l-.44-2.66Z"
            />
            <path
              className={styles.pillowTwo}
              d="M117.51,314.1s-9.87-.55-18.51,3.1-18.51,12.86-18.51,12.86l1.77,2.33s12.3-14.3,36.14-16.18l-.89-2.11Z"
            />
            <path
              className={styles.pillowTwo}
              d="M122.83,351.45s-5.99-1.11-14.3,1.55-13.86,8.65-13.86,8.65l1.11,1.33s14.52-11.2,27.05-9.53v-2Z"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}
