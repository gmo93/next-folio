import "@/styles/globals.css";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import { Rubik } from "next/font/google";
import { useEffect, useState } from "react";

const rubik = Rubik({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [mobile, setMobile] = useState(false);
  const [windowSize, setWindowSize] = useState();

  useEffect(() => {
    setWindowSize(window.screen.width);
    console.log(windowSize);
    windowSize < 770 ? setMobile(true) : setMobile(false);
  }, [windowSize]);

  return (
    <main className={rubik.className}>
      {mobile ? <MobileHeader /> : <Header />}
      <Component {...pageProps} />
    </main>
  );
}
