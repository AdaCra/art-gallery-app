import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import { toTitleCase } from "../Functions/toTitleCase/toTitleCase";
import FavoriteButton from "../Favorite";

export default function ArtPieceTile({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/art-pieces/${pieces.slug}`);
  };
  const correctedName = toTitleCase(pieces.artist);
  return (
    <GridTile>
      <ImageBox>
        <NextImage
          src={pieces.imageSource}
          alt={pieces.name}
          fill
          sizes="(max-width: 4000px) 80vw, 80vw"
          priority={true}
          onClick={handleClick}
        />
      </ImageBox>
      <InfoBox>
        <div>
          <InfoContent> {pieces.name}</InfoContent>
        </div>
        <div>
          <InfoContent> {correctedName}</InfoContent>
        </div>
        <div>
          {pieces.year === "unknown" ? (
            ""
          ) : (
            <InfoContent> {pieces.year}</InfoContent>
          )}
        </div>
      </InfoBox>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        slug={pieces.slug}
        artPiecesInfo={artPiecesInfo}
      />
    </GridTile>
  );
}

const GridTile = styled.section`
  position: relative;
  width: 600px;
  height: 750px;
  border: 2px solid pink;
  padding: 15px;
  margin-bottom: 30px;
  @media (max-width: 610px) {
    width: 400px;
    height: 550px;
    padding: 10px;
  }

  @media (max-width: 410px) {
    width: 200px;
    height: 350px;
  }
`;

const InfoBox = styled.div`
  width: 570px;
  margin-top: 15px;
  height: 60px;
  position: absolute;
  @media (max-width: 610px) {
    width: 370px;
  }
  @media (max-width: 410px) {
    width: 180px;
    height: 80px;
  }
`;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 75px);
  @media (max-width: 410px) {
    height: calc(100% - 90px);
  }
`;

const NextImage = styled(Image)`
  object-fit: contain;
  cursor: pointer;
`;

const InfoContent = styled.h3`
  display: inline;
  font-weight: bold;
  font-style: italic;
  text-decoration: none;
`;
