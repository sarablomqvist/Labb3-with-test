import Link from "next/link";
import Counter from "../../modules/show/counter";
import Network from "../../modules/show/network";
import Image from "../../modules/show/image";
import Schedule from "../../modules/show/schedule";
import Webchannel from "../../modules/show/webchannel";
import Genres from "../../modules/show/genres";
import Externals from "../../modules/show/externals";

export async function getStaticPaths() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=g");
  const shows = await res.json();

  const paths = shows.map((item: any) => {
    return { params: { slug: String(item.show.id) } };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const url = "https://api.tvmaze.com/shows/" + slug;

  const response = await fetch(url);
  const show = await response.json();

  return { props: { show } };
}

export default function Page({ show }: { show: any }) {
  if (!show) return <div className="container">Loading...</div>;

  const externals = show.externals ? (
    <Externals externals={show.externals} />
  ) : (
    ""
  );
  const schedule = show.schedule ? <Schedule schedule={show.schedule} /> : "";
  const image = show.image ? <Image image={show.image} /> : "";
  const genres = show.genres ? <Genres genres={show.genres} /> : "";
  const network = show.network ? <Network network={show.network} /> : "";
  const webchannel = show.webChannel ? (
    <Webchannel webchannel={show.webChannel} />
  ) : (
    ""
  );

  return (
    <div className="container">
      <h1>{show.name}</h1>
      {genres}
      {image}
      <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
      {externals}
      {network}
      {webchannel}
      {schedule}
      <Link href="/home">
        <button>Back</button>
      </Link>
      <Counter />
    </div>
  );
}
