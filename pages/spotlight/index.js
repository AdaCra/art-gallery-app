import Spotlight from "../../components/Spotlight";

export default function Tile({ data ,artPiecesInfo}) {
  const spotlight = data[Math.floor(Math.random() * data.length)];

  return (
    <section>
      <Spotlight pieces={spotlight} imageScale={600} artPiecesInfo={artPiecesInfo}/>
    </section>
  );
}
