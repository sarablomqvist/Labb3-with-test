export default function Network({ network }: { network: any }) {
  const country = network.country?.name ? (
    <div>Country: {network.country.name}</div>
  ) : (
    ""
  );

  return (
    <div>
      <h5>Network:</h5>
      <div>Name: {network.name}</div>
      {country}
    </div>
  );
}
