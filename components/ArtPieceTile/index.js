import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function ArtPieceTile({ pieces }) {
  const router = useRouter();
  const currentUrl = router.asPath;

  const artPiecesPage = currentUrl.includes("art-pieces/");

  const handleClick = () => {
    router.push(`/art-pieces/${pieces.slug}`);
  };

  return (
    <ImageWrapper>
      <ImageBox>
        <NextImage
          $isDetails={artPiecesPage}
          src={pieces.imageSource}
          alt={pieces.name}
          fill
          sizes="(max-width: 4000px) 80vw, 80vw"
          priority={true}
          onClick={artPiecesPage ? () => {} : handleClick}
        />
      </ImageBox>
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  z-index: 0;
  margin: 0 auto 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  position: relative;
  width: 80vw;
  height: calc(100vh - 430px);
`;

const NextImage = styled(Image)`
  object-fit: contain;
  cursor: ${({ $isDetails }) => ($isDetails ? "default" : "pointer")};
`;
