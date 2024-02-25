export default function Network({ network }: { network: any }) {
  return (
    <div>
      <h5>Network:</h5>
      <div>Name: {network.name}</div>
      <div>Country: {network.country.name}</div>
    </div>
  );
}
