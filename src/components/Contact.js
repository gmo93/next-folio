import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRef } from "react";

export default function ContactUs() {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const message = messageInputRef.current.value;

    console.log(name);
    console.log(email);
    console.log(message);

    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    messageInputRef.current.value = "";
  };

  return (
    <section id="contact" className={styles.contactUs}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nameInputRef}></input>
        <input type="text" placeholder="Email" ref={emailInputRef}></input>
        <input type="text" placehodler="Message" ref={messageInputRef}></input>
        <button type="submit">Submit</button>
      </form>
      <h2>Contact Us</h2>
      <div className={styles.sleepyEyesCont}></div>
    </section>
  );
}
