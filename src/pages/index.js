import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import { useInView, InView } from "react-intersection-observer";

// Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Link from "next/link";
import Featwork from "@/components/Featwork";
import BigText from "@/components/BigText";
import ExploreWork from "@/components/ExploreWork";
import OtherServ from "@/components/OtherServ";
import ContactUs from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [tuckedIn, setTuckedIn] = useState(false);

  const setInView = (inView) => {
    if (inView) {
      setTuckedIn(true);
      console.log(inView);
    } else {
      console.log("not in view");
    }
  };
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Hero />
        <InView onChange={setInView} threshold={0.65}>
          <BigText tuckedIn={tuckedIn} />
        </InView>
        <ExploreWork />
        <ContactUs />
      </main>
    </>
  );
}
