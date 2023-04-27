import ArtPieces from "../../components/ArtPieces";

export default function Tile({ data }) {
  const spotlight = data[Math.floor(Math.random() * data.length)];

  return (
    <section>
      <ArtPieces art={spotlight} imageScale={500} />
    </section>
  );
}
