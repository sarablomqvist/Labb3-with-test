import Head from "next/head";
import styles from "./index.module.css";
import Header from "../../modules/home/header";
import Card from "../../modules/home/card";
import Footer from "../../modules/home/footer";

export async function getStaticProps() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=g");
  const shows = await res.json();

  return { props: { shows } };
}

export default function Home({ shows }: { shows: any }) {
  var links = shows.map((item: any) => {
    return <Card key={item.show.id} show={item.show} />;
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>TV shows on G!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className={styles.grid}>{links}</div>
      </main>

      <Footer />
    </div>
  );
}
