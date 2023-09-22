import { useRouter } from "next/router";
import styled from "styled-components";
import { toTitleCase } from "../../components/Functions/toTitleCase/toTitleCase";
import ArtPieceTile from "../../components/ArtPieceTile";
import NextPrevButtons from "../../components/ArtPieceTile/NextPrevButtons/NextPrevButtons";
import FavoriteButton from "../../components/Favorite";

export default function Tile({ data, onToggleFavorite, artPiecesInfo }) {
  const router = useRouter();
  const { slug } = router.query;
  const currentArt = data.find((art) => art.slug === slug);

  const correctedName = toTitleCase(currentArt.artist);

  return (
    <TileDisplaySection>
      <NextPrevButtons currentArt={currentArt} data={data} />
      <div>
          <h2>{currentArt.name}</h2>
          <AuthorH2>by {correctedName}</AuthorH2>
        <FavoriteButton
            onToggleFavorite={onToggleFavorite}
            slug={currentArt.slug}
            artPiecesInfo={artPiecesInfo}
          />
      </div>

      <ArtPieceTile
        pieces={currentArt}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </TileDisplaySection>
  );
}

const TileDisplaySection = styled.section`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: calc(100vh - 280px);
  text-align: center;
`;

const AuthorH2 = styled.h2`
  font-style: italic;
  font-size: 17px;
  padding: 6px 0 15px;
  @media (max-width: 510px) {
    font-size: 14px;
  }
`;
