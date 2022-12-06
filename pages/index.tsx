import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AboutIndex from "./about";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Floema Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AboutIndex />
      </main>

      <footer className={styles.footer}>
        <span>
          <Image
            src="/logo_white.svg"
            alt="Vercel Logo"
            width={100}
            height={16}
          />
        </span>
      </footer>
    </div>
  );
}
