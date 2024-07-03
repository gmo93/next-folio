import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <p>Grant Omohundro</p>
      <nav>
        <Link href="/">Home</Link>
        <a href="">Portfolio</a>
        <a href="">Contact</a>
      </nav>
    </header>
  );
}
