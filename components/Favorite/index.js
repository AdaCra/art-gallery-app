import Image from "next/image";
import MeHearty from "../Heart/Heart";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function FavoriteButton({
  onToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  const router = useRouter();
  const currentUrl = router.asPath;

  const currentPiece = artPiecesInfo.find((current) => current.slug === slug);
  const isFavorite = currentPiece ? currentPiece.isFavorite : false;
  const HeartStyle =
    currentUrl.includes("grid") || currentUrl.includes("favorites")
      ? HeartButtonGrid
      : currentUrl.includes("tile")
      ? HeartButtonTile
      : currentUrl.includes("art-pieces/")
      ? HeartButtonDetail
      : Centered;

  return (
    <HeartStyle
      title={isFavorite ? "Remove from Favourites" : "Add to Favorites"}
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
        style={{ visibility: "hidden" }}
      />
    </HeartStyle>
  );
}
const Centered = styled.button`
  position: absolute;
  background: black;
`;

const HeartButtonTile = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  height: 25px;
  width: 25px;
`;

const HeartButtonGrid = styled.button`
  position: absolute;
  background: var(--dm_background_highlight);
  border: var(--dm_background_highlight);
  cursor: pointer;
  height: 30px;
  width: 30px;
  bottom: 15px;
  right: 15px;
  @media (max-width: 410px) {
    top: 15px;
    right: -40px;
  }
`;
const HeartButtonDetail = styled.button`
  position: absolute;
  background: var(--dm_background_highlight);
  border: var(--dm_background_highlight);
  cursor: pointer;
  height: 30px;
  width: 30px;
  top: 80px;
  right: 5%;
`;
