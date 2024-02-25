export default function Image({ image }: { image: any }) {
  return (
    <div>
      <img src={image.medium} />
    </div>
  );
}
