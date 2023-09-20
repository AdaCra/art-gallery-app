import Image from "next/image";
import FavoriteButton from "../Favorite";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function ArtPieces({
  pieces,
  imageScale,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const imageWidthRatio = pieces.dimensions.height / imageScale;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/art-pieces/${pieces.slug}`);
  };

  return (
      <ImageWrapper>
        <ImageBox>
          <Image
            src={pieces.imageSource}
            alt={pieces.name}
            width={pieces.dimensions.width / imageWidthRatio}
            height={imageScale}
            priority={true}
            onClick={handleClick}
          />
          <FavoriteButton
            onToggleFavorite={onToggleFavorite}
            slug={pieces.slug}
            artPiecesInfo={artPiecesInfo}
          />
        </ImageBox>
      </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  z-index: 0;
  padding: 20px;
  position: relative;
  width: 80vw;
  height: calc(100vw - 360px)
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  border: none;
  margin: 0;
  padding: 0;
  position: relative;
`;
