import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function OtherServ() {
  return (
    <section className={styles.otherServHead}>
      <div className={styles.otherServLeft}>
        <div className={styles.otherServLeftStick}>
          <div className={styles.otherServLeftHeads}>
            <h3>So we build sites,</h3>
            <h2>But what else can we do?</h2>
          </div>
          <svg
            className={styles.pillowTextImg}
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 841.54 845.8"
          >
            <g id="Layer_2-2" data-name="Layer 2">
              <g className={styles.pillowLetters}>
                <path
                  className={styles.pillowTextThree}
                  d="M417.81,3.65l1.56,60.31-16.37.42-1.56-60.31,16.37-.42Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M482.73,7.46l-5.11,60.11-13.62-1.16-19.04-33.43-.35-.03-2.69,31.58-16.32-1.39,5.11-60.11,13.85,1.18,18.69,33.28.47.04,2.68-31.47,16.32,1.39Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M565.97,28.64l-17.22,57.82-13.1-3.9-11.84-36.6-.34-.1-9.05,30.38-15.7-4.68,17.22-57.82,13.33,3.97,11.54,36.39.45.14,9.02-30.27,15.7,4.68Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M553.98,88.79l25.66-54.6,39.35,18.5-5.61,11.94-24.53-11.53-4.41,9.38,22.5,10.58-5.61,11.94-22.5-10.58-4.41,9.38,24.42,11.48-5.61,11.94-39.24-18.45Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M598.79,110.31l32.93-50.55,36.43,23.74-7.2,11.06-22.71-14.79-5.66,8.69,20.83,13.57-7.2,11.06-20.83-13.57-5.66,8.69,22.61,14.73-7.2,11.06-36.33-23.67Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M657.61,152.85l-17.35-15.42,40.09-45.09,17.17,15.27c4.64,4.12,7.85,8.59,9.63,13.39,1.78,4.81,2.1,9.71.95,14.72-1.15,5.01-3.82,9.86-7.99,14.55-4.18,4.7-8.68,7.91-13.51,9.65-4.83,1.74-9.72,2.01-14.68.82-4.96-1.19-9.73-3.82-14.31-7.89ZM661.74,137.92l4.67,4.15c2.23,1.98,4.45,3.32,6.67,4,2.22.68,4.52.51,6.92-.51,2.39-1.02,4.99-3.11,7.78-6.25,2.79-3.14,4.55-5.97,5.27-8.48.72-2.51.59-4.85-.39-7.01s-2.65-4.29-5-6.37l-4.31-3.84-21.61,24.3Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M753.36,217.66c-5.42,3.97-10.76,6.26-16.02,6.87-5.26.61-10.15-.17-14.69-2.36s-8.41-5.48-11.63-9.88c-3.25-4.44-5.22-9.15-5.91-14.13-.69-4.98.05-9.88,2.23-14.7,2.18-4.82,5.96-9.2,11.35-13.15,5.42-3.97,10.76-6.26,16.01-6.88,5.25-.62,10.14.16,14.67,2.33s8.41,5.48,11.66,9.92c3.22,4.4,5.19,9.1,5.91,14.08.71,4.98-.02,9.88-2.19,14.71-2.17,4.83-5.97,9.23-11.39,13.19ZM743.41,204.06c2.92-2.13,5.09-4.32,6.54-6.56s2.13-4.48,2.08-6.74c-.06-2.26-.89-4.48-2.49-6.67-1.6-2.19-3.47-3.65-5.6-4.39s-4.48-.76-7.05-.06c-2.57.7-5.31,2.12-8.22,4.25-2.92,2.13-5.09,4.32-6.54,6.56-1.44,2.24-2.13,4.48-2.07,6.74s.89,4.48,2.49,6.67c1.6,2.19,3.47,3.65,5.6,4.39s4.48.76,7.05.06,5.31-2.12,8.22-4.25Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M731.33,240.49l53.53-27.82,19.56,37.64-11.71,6.09-12.01-23.11-9.2,4.78,10.81,20.81-11.71,6.09-10.81-20.81-20.91,10.87-7.55-14.53Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M763.24,311.31l-4.91-16.98,63.49,2.38,6.22,21.51-52.43,35.88-4.91-16.98,38.33-24.82-.13-.45-45.66-.54ZM785.19,301.53l9.23,31.92-11.77,3.4-9.23-31.92,11.77-3.4Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M821.4,409.78c1.02-.32,1.91-.78,2.67-1.38.76-.6,1.39-1.32,1.9-2.17.51-.85.87-1.82,1.08-2.9.22-1.09.28-2.27.2-3.54-.17-2.74-.98-5.04-2.41-6.89-1.44-1.85-3.42-3.2-5.95-4.05-2.53-.85-5.54-1.17-9.03-.95-3.53.22-6.52.9-8.96,2.01-2.45,1.12-4.28,2.67-5.49,4.66-1.21,1.99-1.73,4.39-1.55,7.21.16,2.49.65,4.54,1.48,6.15.83,1.61,1.94,2.79,3.32,3.52s2.98,1.05,4.78.94l-.11,2.84-.87-13.76,11.64-.74,1.69,26.69-8.35.53c-5.49.35-10.25-.52-14.29-2.59-4.04-2.08-7.22-5.08-9.54-9.02-2.33-3.94-3.66-8.53-3.99-13.78-.37-5.86.55-11.08,2.76-15.67,2.21-4.59,5.54-8.27,9.99-11.04,4.45-2.77,9.85-4.36,16.2-4.76,4.98-.32,9.44.16,13.37,1.44,3.94,1.28,7.32,3.18,10.15,5.72,2.83,2.54,5.03,5.54,6.62,9,1.59,3.46,2.51,7.22,2.77,11.28.23,3.57-.07,6.92-.88,10.05-.82,3.13-2.07,5.94-3.78,8.42-1.7,2.48-3.77,4.52-6.21,6.13-2.44,1.61-5.15,2.67-8.15,3.17l-1.05-16.52Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M805.8,496.25c-6.68-.72-12.17-2.63-16.46-5.73-4.3-3.09-7.38-6.97-9.26-11.64-1.87-4.67-2.52-9.72-1.93-15.14.59-5.47,2.32-10.27,5.17-14.42,2.85-4.15,6.7-7.26,11.56-9.35s10.61-2.77,17.25-2.05c6.68.72,12.17,2.63,16.46,5.71,4.3,3.08,7.38,6.95,9.26,11.61,1.87,4.66,2.51,9.72,1.92,15.19-.59,5.43-2.3,10.22-5.13,14.38-2.83,4.16-6.68,7.29-11.54,9.38-4.86,2.1-10.63,2.79-17.31,2.06ZM807.62,479.5c3.59.39,6.67.25,9.25-.43,2.57-.68,4.6-1.87,6.08-3.58,1.48-1.71,2.37-3.91,2.66-6.6.29-2.69-.1-5.03-1.18-7.02-1.08-1.98-2.8-3.58-5.17-4.8-2.37-1.22-5.35-2.02-8.94-2.41-3.59-.39-6.67-.25-9.25.43-2.57.68-4.6,1.87-6.08,3.58-1.48,1.71-2.37,3.91-2.66,6.6-.29,2.69.1,5.03,1.18,7.02,1.08,1.98,2.8,3.58,5.17,4.8,2.37,1.22,5.35,2.02,8.94,2.41Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M787.31,562.64c-6.44-1.89-11.51-4.73-15.2-8.53-3.68-3.8-6.04-8.16-7.06-13.09-1.02-4.92-.77-10.01.77-15.25,1.55-5.28,4.09-9.71,7.62-13.28,3.54-3.58,7.88-5.97,13.03-7.17,5.15-1.2,10.93-.87,17.34,1.01,6.45,1.89,11.51,4.73,15.2,8.52,3.69,3.79,6.05,8.14,7.07,13.06,1.03,4.91.77,10.01-.78,15.29-1.53,5.24-4.06,9.66-7.58,13.25-3.52,3.59-7.86,6-13.01,7.21-5.15,1.21-10.95.87-17.4-1.01ZM792.05,546.47c3.47,1.02,6.53,1.42,9.18,1.2s4.86-1.03,6.61-2.45c1.76-1.42,3.02-3.43,3.78-6.03.76-2.6.79-4.97.07-7.12-.71-2.14-2.13-4.02-4.24-5.63-2.12-1.61-4.91-2.93-8.38-3.94-3.47-1.02-6.53-1.42-9.18-1.2-2.65.21-4.86,1.03-6.61,2.45-1.76,1.42-3.02,3.43-3.78,6.03-.76,2.6-.79,4.97-.07,7.12.71,2.14,2.13,4.02,4.24,5.63s4.91,2.93,8.38,3.94Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M746.04,579.79l10.21-20.85,54.19,26.52-10.1,20.64c-2.73,5.57-6.17,9.87-10.32,12.87-4.15,3.01-8.79,4.63-13.92,4.86-5.13.23-10.52-1.03-16.17-3.8-5.64-2.76-9.95-6.24-12.92-10.42-2.97-4.19-4.55-8.83-4.73-13.92-.18-5.1,1.07-10.4,3.77-15.9ZM761.53,579.77l-2.75,5.61c-1.31,2.68-2,5.18-2.06,7.5-.06,2.32.72,4.49,2.35,6.53,1.63,2.03,4.33,3.97,8.11,5.82,3.77,1.85,6.97,2.78,9.58,2.8,2.61.02,4.83-.73,6.65-2.26,1.82-1.53,3.42-3.7,4.8-6.52l2.54-5.19-29.21-14.3Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M737.13,703.02l-47.65-37.01,8.38-10.79,38.4,2.23.22-.28-25.03-19.44,10.05-12.94,47.65,37.01-8.53,10.98-38.1-2.43-.29.37,24.94,19.37-10.05,12.94Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M716.46,723.85l-43.23-42.08,11.42-11.74,43.23,42.09-11.43,11.74Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M664.55,742.83c.85.65,1.75,1.11,2.67,1.38s1.88.37,2.87.29,1.98-.35,2.99-.8c1.01-.45,2.01-1.08,3-1.89,2.13-1.73,3.54-3.72,4.21-5.96.67-2.24.62-4.64-.15-7.2s-2.26-5.19-4.47-7.91c-2.23-2.75-4.51-4.79-6.84-6.14-2.33-1.35-4.66-1.94-6.98-1.77-2.32.16-4.58,1.14-6.78,2.92-1.94,1.57-3.32,3.16-4.15,4.77-.83,1.61-1.15,3.19-.94,4.75.2,1.56.87,3.04,2.01,4.44l-2.38,1.55,10.7-8.69,7.35,9.06-20.77,16.86-5.27-6.5c-3.47-4.27-5.52-8.65-6.17-13.14-.65-4.49-.05-8.83,1.81-13.01,1.86-4.18,4.83-7.92,8.92-11.24,4.56-3.7,9.35-5.98,14.37-6.84s9.95-.28,14.78,1.74c4.84,2.02,9.26,5.5,13.27,10.44,3.14,3.87,5.34,7.78,6.58,11.73,1.24,3.95,1.65,7.81,1.22,11.58-.43,3.77-1.59,7.31-3.49,10.61-1.9,3.3-4.43,6.23-7.58,8.79-2.78,2.25-5.68,3.95-8.7,5.11-3.02,1.15-6.04,1.75-9.05,1.8-3.01.05-5.87-.45-8.6-1.5-2.73-1.05-5.16-2.65-7.31-4.8l12.86-10.43Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M621.18,725.29l29.64,52.55-14.27,8.05-11.58-20.53-18.88,10.65,11.58,20.53-14.27,8.05-29.64-52.55,14.27-8.05,11.58,20.53,18.89-10.65-11.58-20.53,14.27-8.05Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M586.45,797.85l4.57,12.38-49.19,18.17-4.57-12.38,17.02-6.29-16.33-44.21,15.14-5.59,16.33,44.21,17.02-6.29Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M521.96,833.01l-6.15-23.6,10.26-2.67,6.15,23.6-10.26,2.67Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M475.88,822.74c.46,1.91,1.43,3.31,2.89,4.19,1.46.88,3.5,1.11,6.12.69,1.67-.27,3-.68,3.99-1.25.99-.57,1.69-1.23,2.08-1.99s.53-1.58.41-2.45c-.08-.72-.31-1.35-.7-1.87-.39-.52-.95-.96-1.69-1.31-.73-.35-1.64-.63-2.73-.83-1.09-.2-2.36-.34-3.82-.4l-5.05-.27c-3.41-.17-6.38-.64-8.91-1.41-2.53-.77-4.66-1.8-6.4-3.11-1.74-1.3-3.12-2.86-4.13-4.66-1.01-1.81-1.71-3.84-2.1-6.11-.61-3.92-.16-7.39,1.35-10.42,1.51-3.02,3.94-5.53,7.31-7.52,3.37-1.99,7.58-3.39,12.62-4.2,5.18-.83,9.81-.78,13.91.13,4.09.92,7.46,2.8,10.09,5.65,2.63,2.85,4.36,6.77,5.17,11.75l-15.36,2.46c-.39-1.81-1.09-3.27-2.1-4.38-1.01-1.11-2.31-1.87-3.9-2.27-1.59-.4-3.41-.44-5.46-.11-1.73.28-3.14.72-4.23,1.33-1.1.61-1.88,1.35-2.36,2.2-.48.85-.65,1.77-.52,2.74.17.91.59,1.66,1.27,2.26.68.6,1.72,1.07,3.11,1.41s3.23.58,5.51.71l6.14.33c5.46.3,9.92,1.55,13.38,3.75,3.46,2.2,5.56,5.63,6.28,10.29.62,3.78.14,7.25-1.45,10.42-1.59,3.17-4.08,5.84-7.46,8.01s-7.43,3.63-12.14,4.39c-4.81.77-9.1.63-12.87-.42s-6.84-2.88-9.22-5.49c-2.38-2.61-3.89-5.87-4.53-9.76l15.48-2.47Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M396.74,812.07l-14.21-28.15,17.78.56,13.85,28.14-17.43-.55ZM432.94,785.5l-1.89,60.3-26.03-.82c-4.48-.14-8.37-1.08-11.67-2.81-3.31-1.73-5.84-4.16-7.61-7.28-1.77-3.12-2.59-6.82-2.45-11.1.14-4.32,1.21-7.93,3.21-10.83,2.01-2.91,4.76-5.06,8.25-6.46,3.49-1.4,7.54-2.03,12.13-1.89l15.55.49-.4,12.72-12.25-.38c-1.92-.06-3.58.13-4.95.57-1.38.44-2.45,1.18-3.22,2.21-.77,1.04-1.18,2.41-1.23,4.12-.05,1.73.27,3.15.97,4.26.7,1.11,1.73,1.95,3.07,2.51,1.35.56,2.98.88,4.91.94l5.77.18,1.48-47.23,16.37.51Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M379.59,783.29l-10.42,59.43-42.83-7.51,2.28-13,26.69,4.68,1.79-10.21-24.49-4.29,2.28-13,24.49,4.29,1.79-10.21-26.58-4.66,2.28-13,42.71,7.49Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M286.9,803.7c-.46,1.91-.25,3.6.65,5.05.9,1.45,2.61,2.59,5.13,3.42,1.61.53,2.98.77,4.12.72s2.06-.32,2.76-.81c.7-.5,1.2-1.16,1.49-1.99.26-.68.34-1.34.23-1.99-.11-.64-.41-1.29-.9-1.94-.49-.65-1.17-1.31-2.04-1.99-.87-.68-1.94-1.38-3.21-2.11l-4.37-2.55c-2.95-1.71-5.38-3.49-7.27-5.33-1.9-1.84-3.32-3.74-4.27-5.69-.95-1.96-1.46-3.97-1.54-6.04-.07-2.07.24-4.2.94-6.39,1.26-3.76,3.25-6.65,5.97-8.64,2.72-2,6.04-3.11,9.95-3.34s8.29.46,13.14,2.05c4.98,1.63,9.08,3.8,12.3,6.49,3.22,2.69,5.35,5.9,6.38,9.64s.78,8.01-.78,12.81l-14.78-4.85c.48-1.78.53-3.4.14-4.85-.39-1.45-1.2-2.72-2.43-3.8-1.23-1.08-2.83-1.95-4.8-2.6-1.66-.54-3.12-.8-4.37-.75-1.25.04-2.29.33-3.11.87s-1.39,1.27-1.71,2.2c-.27.88-.24,1.75.1,2.59.33.84,1.04,1.73,2.11,2.68,1.08.94,2.6,1.99,4.57,3.16l5.31,3.11c4.71,2.77,8.11,5.92,10.18,9.46,2.07,3.54,2.36,7.55.88,12.02-1.18,3.65-3.2,6.51-6.06,8.6-2.87,2.09-6.3,3.32-10.3,3.7-4,.38-8.27-.17-12.8-1.66-4.63-1.52-8.38-3.61-11.25-6.26-2.87-2.66-4.76-5.69-5.68-9.1-.92-3.41-.77-7,.44-10.75l14.89,4.89Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M260.55,800.32l-5.95,11.78-46.81-23.64,5.95-11.78,16.2,8.18,21.25-42.07,14.41,7.28-21.25,42.07,16.2,8.18Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M210.86,740.65l-.81,1.16c-1.86,2.66-3.54,4.63-5.07,5.91-1.52,1.28-3.03,2.12-4.52,2.5s-3.1.55-4.83.49c-1.5-.04-2.88-.04-4.13.02s-2.36.28-3.33.65c-.97.38-1.77,1.01-2.4,1.92-.56.8-.86,1.65-.91,2.53s.15,1.72.57,2.52c.42.8,1.04,1.48,1.84,2.04.87.61,1.81.97,2.82,1.08,1.01.11,1.99-.04,2.93-.43.94-.4,1.73-1.07,2.39-2l12.36,8.64c-2.51,3.52-5.32,5.83-8.45,6.94s-6.35,1.27-9.69.49c-3.33-.78-6.56-2.27-9.68-4.45-3.44-2.41-6.17-5.06-8.17-7.96-2-2.9-3.08-5.9-3.23-9.01-.15-3.11.83-6.18,2.95-9.21,1.36-1.95,2.89-3.42,4.59-4.43,1.7-1.01,3.53-1.66,5.49-1.95,1.97-.29,4.06-.35,6.28-.16,1.63.13,3.09.12,4.38-.05,1.29-.16,2.45-.56,3.49-1.19,1.04-.63,2.01-1.59,2.91-2.87l.81-1.16,11.4,7.96ZM216.31,720.3c1.87,1.31,3.01,3.08,3.42,5.32.41,2.24-.05,4.3-1.38,6.17-1.27,1.85-3.02,2.96-5.26,3.33-2.24.38-4.29-.09-6.16-1.39-1.77-1.24-2.88-2.98-3.33-5.24-.45-2.25-.04-4.3,1.23-6.15.89-1.24,2.02-2.15,3.37-2.73,1.35-.58,2.74-.81,4.18-.71,1.44.11,2.75.57,3.94,1.41Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M114.12,680.15l11.52,11.97c-.91,1.04-1.59,2.13-2.05,3.26-.46,1.14-.68,2.3-.66,3.5.02,1.19.3,2.39.84,3.59.54,1.2,1.35,2.36,2.44,3.49,1.91,1.98,4,3.19,6.27,3.63,2.28.44,4.65.14,7.12-.89s4.97-2.76,7.48-5.18c2.66-2.56,4.54-5.06,5.64-7.5,1.1-2.44,1.45-4.77,1.04-6.99-.41-2.22-1.53-4.29-3.37-6.2-1.05-1.09-2.13-1.93-3.23-2.53s-2.23-.96-3.36-1.1c-1.14-.13-2.27-.04-3.4.27-1.13.31-2.23.85-3.3,1.6l-11.44-12.05c1.98-1.63,4.34-2.91,7.11-3.85s5.73-1.37,8.91-1.28c3.18.09,6.41.87,9.71,2.33,3.29,1.47,6.47,3.79,9.53,6.97,3.84,3.99,6.43,8.39,7.76,13.2,1.33,4.81,1.22,9.73-.34,14.76-1.56,5.03-4.75,9.87-9.56,14.5-4.84,4.66-9.82,7.65-14.93,8.98-5.12,1.33-10.05,1.23-14.81-.3-4.76-1.53-9.01-4.25-12.77-8.15-2.64-2.75-4.7-5.63-6.17-8.66-1.47-3.03-2.32-6.1-2.56-9.23s.18-6.22,1.25-9.3c1.07-3.08,2.85-6.03,5.34-8.86Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M80.32,618.53c5.57-3.76,10.99-5.84,16.27-6.26,5.28-.41,10.14.56,14.59,2.91,4.45,2.35,8.2,5.79,11.25,10.32,3.08,4.56,4.87,9.34,5.37,14.34.5,5.01-.43,9.88-2.79,14.61-2.36,4.73-6.31,8.97-11.84,12.71-5.57,3.76-10.98,5.85-16.26,6.27-5.27.42-10.13-.54-14.57-2.89-4.44-2.35-8.2-5.8-11.28-10.35-3.06-4.52-4.84-9.29-5.37-14.29s.39-9.87,2.75-14.62c2.36-4.74,6.32-8.99,11.88-12.75ZM89.75,632.49c-2.99,2.02-5.25,4.12-6.78,6.3-1.53,2.18-2.3,4.4-2.33,6.66s.72,4.51,2.23,6.76c1.52,2.25,3.33,3.78,5.43,4.6,2.1.82,4.45.93,7.04.33,2.59-.6,5.39-1.91,8.38-3.93,2.99-2.02,5.26-4.12,6.78-6.3,1.53-2.18,2.3-4.4,2.33-6.66.03-2.26-.72-4.51-2.23-6.76s-3.33-3.78-5.43-4.6c-2.1-.82-4.45-.93-7.05-.33-2.59.6-5.38,1.91-8.38,3.93Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M26.49,574.31l54.95-24.91,5.64,12.45-19.87,32.94.15.32,28.87-13.09,6.76,14.92-54.95,24.91-5.74-12.66,19.91-32.57-.19-.43-28.76,13.04-6.76-14.92Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M34.62,558.14l-12.72,3.5-13.91-50.56,12.72-3.5,4.82,17.5,45.44-12.51,4.28,15.57-45.44,12.51,4.81,17.5Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M63.58,475.7l1.83,17.58-62.07-13.54-2.32-22.27,57.94-26.07,1.83,17.58-42.11,17.66.05.47,44.85,8.59ZM40.25,481.45l-3.45-33.05,12.19-1.27,3.45,33.05-12.19,1.27Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M25.31,369.22l-1.11,16.58c-1.38.03-2.64.25-3.8.68s-2.16,1.05-3.03,1.86c-.87.82-1.57,1.83-2.09,3.03-.52,1.2-.84,2.59-.94,4.16-.18,2.74.33,5.11,1.53,7.09s3.02,3.54,5.44,4.68c2.42,1.14,5.38,1.82,8.87,2.06,3.68.25,6.8-.04,9.34-.87,2.55-.82,4.5-2.13,5.87-3.93,1.37-1.8,2.14-4.02,2.32-6.66.1-1.51,0-2.87-.3-4.1-.3-1.22-.79-2.3-1.45-3.23-.67-.93-1.49-1.71-2.49-2.34-.99-.63-2.13-1.08-3.41-1.37l1.23-16.57c2.53.37,5.08,1.26,7.63,2.67,2.55,1.41,4.87,3.32,6.94,5.73,2.07,2.41,3.67,5.33,4.8,8.75,1.13,3.42,1.55,7.34,1.25,11.75-.37,5.53-1.89,10.4-4.55,14.62-2.66,4.22-6.38,7.45-11.16,9.67-4.77,2.23-10.49,3.12-17.16,2.67-6.7-.45-12.26-2.12-16.68-5.02-4.42-2.9-7.67-6.62-9.73-11.16-2.07-4.55-2.92-9.53-2.56-14.93.25-3.8,1.01-7.26,2.26-10.39,1.25-3.12,2.95-5.82,5.1-8.1,2.15-2.28,4.73-4.05,7.72-5.33,3-1.28,6.38-1.94,10.14-2.01Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M17.71,357.57l-12.86-2.98,11.85-51.08,12.86,2.98-4.1,17.68,45.91,10.66-3.65,15.73-45.91-10.66-4.1,17.68Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M41.92,240.74l6.82-14.89,35.14,16.09c4.18,1.91,7.33,4.56,9.47,7.95,2.13,3.39,3.21,7.23,3.24,11.54.03,4.31-1.04,8.81-3.19,13.51-2.17,4.73-4.89,8.5-8.17,11.29-3.28,2.8-6.89,4.49-10.84,5.07-3.95.58-8.01-.09-12.19-2l-35.14-16.09,6.82-14.89,33.86,15.5c1.7.78,3.38,1.09,5.06.95s3.19-.7,4.55-1.69c1.36-.99,2.43-2.33,3.2-4.03.78-1.71,1.1-3.4.96-5.07-.15-1.66-.71-3.18-1.7-4.54s-2.33-2.43-4.03-3.2l-33.86-15.5Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M89.79,196.1c-1.73-.95-3.41-1.18-5.04-.7-1.64.48-3.19,1.83-4.65,4.05-.93,1.41-1.52,2.67-1.77,3.79-.25,1.12-.23,2.08.06,2.88.29.81.8,1.46,1.53,1.96.59.43,1.2.68,1.85.75.65.07,1.35-.05,2.11-.36.75-.3,1.57-.79,2.46-1.45.88-.66,1.84-1.51,2.88-2.55l3.61-3.55c2.43-2.4,4.78-4.27,7.06-5.61,2.28-1.35,4.48-2.22,6.62-2.62s4.21-.37,6.23.1c2.02.47,3.99,1.33,5.92,2.58,3.3,2.2,5.56,4.88,6.77,8.03,1.21,3.15,1.42,6.65.61,10.48-.81,3.83-2.62,7.88-5.43,12.14-2.89,4.38-6.05,7.77-9.49,10.17-3.44,2.4-7.1,3.61-10.98,3.62-3.88.02-7.93-1.36-12.16-4.12l8.57-12.98c1.59.93,3.14,1.4,4.65,1.41,1.5,0,2.94-.44,4.31-1.34,1.37-.9,2.63-2.21,3.77-3.95.96-1.46,1.59-2.8,1.88-4.02.29-1.22.28-2.3-.02-3.23-.3-.93-.86-1.67-1.67-2.23-.78-.49-1.62-.69-2.52-.59-.9.1-1.95.54-3.14,1.33-1.19.79-2.61,1.98-4.25,3.58l-4.39,4.3c-3.91,3.82-7.84,6.27-11.81,7.33-3.96,1.07-7.91.3-11.83-2.32-3.21-2.09-5.44-4.79-6.7-8.11-1.26-3.31-1.55-6.95-.87-10.91.68-3.96,2.34-7.93,4.97-11.92,2.68-4.07,5.68-7.13,9-9.2,3.32-2.07,6.74-3.1,10.28-3.09,3.53.01,6.95,1.1,10.26,3.26l-8.63,13.08Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M139.91,110l42.89,42.43-9.61,9.72-37.86-6.8-.25.25,22.53,22.29-11.52,11.64-42.89-42.43,9.78-9.88,37.53,6.97.33-.34-22.45-22.21,11.52-11.64Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M216.65,90.05c3.92,5.45,6.17,10.81,6.74,16.08.57,5.26-.26,10.15-2.48,14.66-2.22,4.51-5.55,8.36-9.98,11.55-4.46,3.21-9.19,5.14-14.18,5.79-4.99.65-9.88-.14-14.68-2.36-4.8-2.22-9.15-6.04-13.05-11.46-3.92-5.45-6.17-10.81-6.75-16.07-.58-5.26.24-10.14,2.46-14.65,2.21-4.51,5.55-8.37,10.02-11.58,4.43-3.19,9.14-5.12,14.13-5.79s9.88.1,14.69,2.32c4.81,2.21,9.18,6.05,13.1,11.5ZM202.97,99.89c-2.11-2.93-4.28-5.13-6.5-6.59-2.22-1.46-4.46-2.17-6.72-2.13s-4.49.85-6.69,2.43-3.68,3.44-4.43,5.57-.79,4.48-.12,7.05c.68,2.57,2.07,5.33,4.18,8.26,2.11,2.93,4.28,5.13,6.5,6.59,2.22,1.46,4.46,2.17,6.72,2.13s4.49-.85,6.69-2.43,3.68-3.44,4.43-5.57c.76-2.13.79-4.48.12-7.05-.68-2.57-2.07-5.33-4.18-8.26Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M251.82,104.89l-40.56-48.07,16.72-7.35,22.49,30.66.43-.19-5.98-37.92,13.16-5.78,23.94,30.15.43-.19-7.43-37.41,16.72-7.35,7.99,62.39-14.35,6.31-22.95-26.73-.43.19,4.18,34.98-14.35,6.31Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M331.6,83.05l-.74-4.2,10.09-19.97-13.16,2.33-1.08-6.12,22.82-4.04.74,4.2-10.09,19.97,13.16-2.33,1.08,6.12-22.82,4.04Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M346.43,44.44l-.59-3.21,7.62-15.29-10.03,1.83-.85-4.66,17.4-3.18.59,3.21-7.62,15.29,10.03-1.83.85,4.66-17.4,3.18Z"
                />
                <path
                  className={styles.pillowTextThree}
                  d="M362.94,16.17l-.39-2.12,5.03-10.09-6.62,1.21-.56-3.08,11.49-2.1.39,2.12-5.03,10.09,6.62-1.21.56,3.08-11.49,2.1Z"
                />
              </g>
              <path
                className={styles.pillowTextTwo}
                d="M143.14,355.99s-24.28-14.89-24.61-30.52c-.33-15.63,9.31-45.89,19.62-46.89,10.31-1,28.6,4.66,32.26,18.95,0,0,21.28-9.64,39.9-16.29s54.2-25.27,118.05-39.57,106.08-21.95,174.25-29.6c68.17-7.65,79.81-6.98,81.81-7.65s12.3-25.27,24.61-24.61c12.3.67,26.27,14.96,19.62,40.57,0,0,28.93,41.24,43.23,74.49s42.23,104.75,48.55,178.24c0,0,32.26,30.26,21.62,45.23-10.64,14.96-37.58-2.33-39.57-1.66s-99.76,52.21-197.86,77.15c-98.1,24.94-158.29,26.6-187.89,29.6-29.6,2.99-39.24,8.65-44.23,18.95-4.99,10.31-9.64,27.6-17.62,27.93-7.98.33-27.27-4.99-34.58-28.93-7.32-23.94,6.65-29.6,7.65-31.92s-1.33,4.32-22.28-34.92c-20.95-39.24-66.18-134.49-62.52-218.55Z"
              />
              <path
                className={styles.pillowTextOne}
                d="M142.64,339.85s-18.4-5.99-16.63-25.05,10.86-30.37,14.19-30.82,14.19,5.32,20.62,14.41,5.99,7.76,9.09,7.09,32.15-17.07,43.01-20.17,25.05-7.76,47.66-16.85c22.61-9.09,117.5-38.13,202.41-45.45,84.91-7.32,120.38-9.09,123.93-9.98s5.32-2.44,6.21-5.1,11.53-23.28,17.96-22.83,14.19,11.97,12.86,20.62-.44,7.32-4.88,5.1-5.1,2.66-4.43,5.54,22.83,20.84,40.46,56.09c17.62,35.25,41.57,106.75,46.56,142.66,4.99,35.91,9.31,51.54,4.66,68.17,0,0-.58,1.33,1.5,1.33s2-1.16,4.82-1.75,9.39-.17,14.8,8.4c5.4,8.56,16.21,21.86,10.89,24.44-5.32,2.58-33.59-10.97-36.83-9.98s-76.71,43.92-168.04,68.75c-91.34,24.83-164.5,35.47-208.39,36.36s-54.09,19.95-58.97,28.82c-4.88,8.87-5.87,24.5-14.08,24.05s-24.39-19.95-23.5-30.82,3.33-22.61,9.31-23.72c5.99-1.11,15.3,9.98,17.74,11.08s1.33-5.99.67-8.2-8.29-10.42-11.79-11.31-7.26-2.22-7.71-3.55-46.12-60.36-62.97-122.43c-16.85-62.07-22.17-92-22.61-112.18-.44-20.17-1.11-48.11-3.1-49.22s-3.66,12.03-5.38,26.46Z"
              />
              <path
                className={styles.pillowTextTwo}
                d="M163.47,356.04c-2.39-.38-4.5,1.55-4.34,3.96,1.32,19.99,12.84,159,81.88,221.05,0,0,1.86,1.39,3.1-.86s-1.5-58.94-5.24-80.23-11.11-58.75-27.74-89.79c-14.11-26.33-36.91-52.43-47.67-54.15Z"
              />
              <path
                className={styles.pillowTextOne}
                d="M177.34,438.37s21.98,95.63,53.68,125.34c0,0,3.88,5.21,5.21,0s.89-59.08-14.85-112.95-46.78-80.03-49.22-82.69c0,0-5.54-4.88-5.38,1.33s8.09,65.62,10.56,68.97Z"
              />
              <path
                className={styles.pillowTextTwo}
                d="M170.8,400.85s14.19-9.98,23.28-10.86l2,3.55s-14.63,4.43-24.5,12.41l-.78-5.1Z"
              />
              <path
                className={styles.pillowTextTwo}
                d="M179.34,444.74s14.19-9.53,18.73-11.42,12.64-4.43,20.95-3.66l.89,2.66s-9.98-.55-18.95,3.77-21.17,12.19-21.17,12.19l-.44-3.55Z"
              />
              <path
                className={styles.pillowTextTwo}
                d="M228.78,461.37s-7.21-1.77-18.29,2-21.62,13.75-21.62,13.75l.78,2.77s15.85-9.98,20.62-11.86,12.19-5.21,18.95-3.99l-.44-2.66Z"
              />
              <path
                className={styles.pillowTextTwo}
                d="M235.54,493.4s-9.87-.55-18.51,3.1-18.51,12.86-18.51,12.86l1.77,2.33s12.3-14.3,36.14-16.18l-.89-2.11Z"
              />
              <path
                className={styles.pillowTextTwo}
                d="M240.86,530.76s-5.99-1.11-14.3,1.55-13.86,8.65-13.86,8.65l1.11,1.33s14.52-11.2,27.05-9.53v-2Z"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className={styles.otherServRight}>
        <ul>
          <li>
            <div className={styles.otherIconCont}>
              <svg
                style={{
                  height: "50%",
                  width: "100%",
                  padding: "15%",
                  fill: "white",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
              </svg>
            </div>
            <div className={styles.otherRightText}>
              <h3>Domain Changes</h3>
              <h4>
                We can deal with your DNS setup, domain transfer, and anything
                that goes along with that!
              </h4>
              {/* <Link src=""></Link> */}
            </div>
          </li>
          <li>
            <div className={styles.otherIconCont}></div>
            <div className={styles.otherRightText}>
              <h3>Search Engine Optimization (SEO)</h3>
              <h4>Get your brand or product noticed online with SEO.</h4>
              {/* <Link src=""></Link> */}
            </div>
          </li>
          <li>
            <div className={styles.otherIconCont}></div>
            <div className={styles.otherRightText}>
              <h3>Search Engine Optimization (SEO)</h3>
              <h4>Get your brand or product noticed online with SEO.</h4>
              {/* <Link src=""></Link> */}
            </div>
          </li>
          <li>
            <div className={styles.otherIconCont}></div>
            <div className={styles.otherRightText}>
              <h3>Search Engine Optimization (SEO)</h3>
              <h4>Get your brand or product noticed online with SEO.</h4>
              {/* <Link src=""></Link> */}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
