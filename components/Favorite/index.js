import Image from "next/image";
import MeHearty from "../Heart/Heart";
import styled from "styled-components";

export default function FavoriteButton({
  onToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  const currentPiece = artPiecesInfo.find((current) => current.slug === slug);
  const isFavorite = currentPiece ? currentPiece.isFavorite : false;

  return (
    <HeartButton
      onClick={() => {
        onToggleFavorite(slug);
      }}
    >
      <MeHearty isFavorite={isFavorite} />
      <Image
        src="/heart.svg"
        alt="Favorite"
        width={30}
        height={30}
        className="favorite-icon"
        style={{ visibility: "hidden" }}
      />
    </HeartButton>
  );
}

const HeartButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;
