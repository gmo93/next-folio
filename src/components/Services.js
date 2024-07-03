import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Services() {
  const [servImg, setServImg] = useState("/rope.jpg");

  function logData(e) {
    setServImg(e.target.getAttribute("data-site"));
  }

  return (
    <div className={styles.serviceCont}>
      <div className={styles.servicePhoto}>
        <img src={servImg} />
      </div>
      <div className={styles.serviceList}>
        <ul>
          <li onMouseOver={logData} data-site="/rope.jpg" id="web-dev">
            Web Development
          </li>
          <li onMouseOver={logData} data-site="/gtbDumbo.jpg" id="seo">
            SEO
          </li>
          <li onMouseOver={logData} data-site="/clouds.jpg" id="shopify">
            Shopify
          </li>
          <li onMouseOver={logData} data-site="/sbInSandAlt.jpg" id="wholesale">
            Wholesale Setup
          </li>
          <li onMouseOver={logData} data-site="/shopDakotaRidge.webp" id="js">
            Javascript
          </li>
          <li
            onMouseOver={logData}
            data-site="/back_locked_in_tee.jpg"
            id="domain"
          >
            Domain Setup
          </li>
          <li onMouseOver={logData} data-site="/sippingGTB.jpg" id="ecomm">
            E-Commerce
          </li>
        </ul>
      </div>
    </div>
  );
}
