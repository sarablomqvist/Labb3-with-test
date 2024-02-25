export default function Genres({ genres }: { genres: string[] }) {
  return <div>Genres: {genres.join(", ")}</div>;
}
