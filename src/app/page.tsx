import Image from "next/image";
import styles from "./page.module.scss";
import { HomePage } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  );
}
