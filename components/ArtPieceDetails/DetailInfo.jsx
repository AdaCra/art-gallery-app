import styled from "styled-components";
import FavoriteButton from "../Favorite";
import { toTitleCase } from "../Functions/toTitleCase/toTitleCase";

export default function ArtworkInfo({
  onToggleFavorite,
  currentArt,
  artPiecesInfo,
}) {
  const correctedName = toTitleCase(currentArt.artist);

  return (
    <div>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        slug={currentArt.slug}
        artPiecesInfo={artPiecesInfo}
      />
      <h2>{currentArt.name}</h2>
      <AuthorH2>by {correctedName}</AuthorH2>

      <p>{currentArt.year}</p>
      <br />
      <p>Genre: {currentArt.genre}</p>
    </div>
  );
}

const AuthorH2 = styled.h2`
  font-style: italic;
  font-size: 17px;
  padding: 6px 0 15px;
  @media (max-width: 510px) {
    font-size: 14px;
  }
`;
