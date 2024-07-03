const { default: Image } = require("next/image");
const { default: Link } = require("next/link");
import styles from "@/styles/Home.module.css";

export default function Featwork() {
  return (
    <div className={styles.featWorkCont}>
      <h2>Featured Work</h2>
      <div className={styles.featWorkProjCont}>
        <div className={styles.featScrollCont}>
          <div className={styles.featWorkInd}>
            <div className={styles.imgCont}>
              <Link href="/classickstudios">
                <Image
                  alt="Classick Studios engineer sitting at a computer"
                  fill
                  src="/lockedInTee.jpg"
                />
              </Link>
            </div>
            <h3>Classick Studios</h3>
            <p>Locked In Tee Checkout</p>
          </div>
          <div className={styles.featWorkInd}>
            <div className={styles.imgCont}>
              <Image
                alt="Someone holding a N/A beer can"
                fill
                src="/gtbDumbo.jpg"
              />
            </div>
            <h3>Good Time Brewing</h3>
            <p>Website Build and Function</p>
          </div>
          <div className={styles.featWorkInd}>
            <div className={styles.imgCont}>
              <Image
                alt="Someone at the beach wearing the Dakota Ridge waterproof boots"
                fill
                src="/shopDakotaRidge.webp"
              />
            </div>
            <h3>Dakota Ridge</h3>
            <p>Wholesale and Upsell Functionality</p>
          </div>
          <div className={styles.featWorkInd}>
            <div className={styles.imgCont}>
              <Image
                alt="a rope being wrapped around fasteners"
                fill
                src="/rope.jpg"
              />
            </div>
            <h3>Studio Supers</h3>
            <p>Website Buildout</p>
          </div>
          <div className={styles.featWorkInd}>
            <div className={styles.imgCont}>
              <Image
                alt="a sandbar sitting in sand beside the salve"
                fill
                src="/sbInSandAlt.jpg"
              />
            </div>
            <h3>SandBar Callus Care</h3>
            <p>Website Build, Wholesale, etc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
