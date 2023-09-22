import styled from "styled-components";
import Spotlight from "../../components/Spotlight/Spotlight";

export default function Tile({ data, onToggleFavorite, artPiecesInfo }) {
  const spotlight = data[Math.floor(Math.random() * data.length)];

  return (
      <Spotlight
        pieces={spotlight}
        imageScale={1100}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
  );
}


