import Image from "next/image";
import FavoriteButton from "../Favorite";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function ArtPieceTile({
  pieces,
  imageScale,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const router = useRouter();
  const imageBoxRef = useRef(null);
  const imageRatio = pieces.dimensions.width / pieces.dimensions.height;
  const boxRatio = 0;
  useEffect(() => {
    // Use useEffect to access the size after rendering
    if (imageBoxRef.current) {
      const imageBoxWidth = imageBoxRef.current.offsetWidth;
      const imageBoxHeight = imageBoxRef.current.offsetHeight;
      console.log(`ImageBox Width: ${imageBoxWidth}px`);
      console.log(`ImageBox Height: ${imageBoxHeight}px`);
    }
  }, []);
  // if imageRatio < than boxRatio then image load imageWidth = boxWidth and imageHeight = boxWidth / imageRatio
  // if imageRatio > than boxRatio then image load imageHeight = boxHeight and imageWidth = boxheight * imageRatio

  const handleClick = () => {
    router.push(`/art-pieces/${pieces.slug}`);
  };

  return (
    <ImageWrapper>
      <ImageBox ref={imageBoxRef}>
        <Image
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
