import Image from "next/image";
import FavoriteButton from "../Favorite";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function ArtPieceTile({
  pieces,
  imageScale,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const router = useRouter();
  const imageRatio = pieces.dimensions.width / pieces.dimensions.height;
  const boxRatio = 0;

  const handleClick = () => {
    router.push(`/art-pieces/${pieces.slug}`);
  };

  return (
    <ImageWrapper>
      <ImageBox>
        <Image
        style={{objectFit: "contain"}}
          src={pieces.imageSource}
          alt={pieces.name}
          fill
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
  margin: 0 auto;
  padding-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  position: relative;
  width: 80vw;
  height: calc(100vh - 400px);
`;

const NextImage = styled(Image)``;
