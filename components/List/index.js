import ArtPieces from "../ArtPieces";

export default function Grid({ data, onToggleFavorite, artPiecesInfo }) {
  return (
    <>
      {data.map((art, index) => {
        return (
          <section key={index}>
            <ArtPieces
              pieces={art}
              imageScale={250}
              onToggleFavorite={onToggleFavorite}
              artPiecesInfo={artPiecesInfo}
            />
          </section>
        );
      })}
    </>
  );
}
