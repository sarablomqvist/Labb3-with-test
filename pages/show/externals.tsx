export default function Externals({ externals }: { externals: any }) {
  const imdb = externals.imdb ? (
    <div>
      <strong>Imdb:</strong>{" "}
      <a href={`http://www.imdb.com/title/${externals.imdb}/`}>link</a>
    </div>
  ) : (
    ""
  );

  const thetvdb = externals.thetvdb ? (
    <div>
      <strong>The TV DB:</strong>{" "}
      <a
        href={`https://www.thetvdb.com/dereferrer/series/${externals.thetvdb}/`}
      >
        link
      </a>
    </div>
  ) : (
    ""
  );

  return (
    <div>
      {imdb}
      {thetvdb}
    </div>
  );
}
