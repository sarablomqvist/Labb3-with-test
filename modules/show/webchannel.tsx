export default function Webchannel({ webchannel }: { webchannel: any }) {
  const country = webchannel.country?.name ? (
    <div>Country: {webchannel.country.name}</div>
  ) : (
    ""
  );

  return (
    <div>
      <h5>Web channel:</h5>
      <div>Name: {webchannel.name}</div>
      {country}
    </div>
  );
}
