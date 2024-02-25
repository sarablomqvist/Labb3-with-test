import Link from "next/link";
import styles from "./card.module.css";

export default function Card({ show }: { show: any }) {
  return (
    <Link key={show.id} href={"/show/" + show.id} className={styles.card}>
      <h3>{show.name}</h3>
      <p>Type: {show.type}</p>
    </Link>
  );
}
