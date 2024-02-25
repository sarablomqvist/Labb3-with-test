export default function Webchannel({ webchannel }: { webchannel: any }) {
  return (
    <div>
      <h5>Web channel:</h5>
      <div>Name: {webchannel.name}</div>
      <div>Country: {webchannel.country.name}</div>
    </div>
  );
}
