import "@/styles/globals.css";
import Header from "@/components/Header";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={rubik.className}>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
