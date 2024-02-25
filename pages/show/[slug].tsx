import Link from "next/link";
import Counter from "./counter";

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
  return (
    <div className="container">
      <h1>{show.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
      <Link href="/home">
        <button>Back</button>
      </Link>
      <Counter />
    </div>
  );
}
