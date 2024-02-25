import Head from "next/head";
import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <h1 className={styles.title}>Welcome to top TV Shows with G!</h1>
      <p className={styles.description}>Click a movie to learn more!</p>
    </>
  );
}
