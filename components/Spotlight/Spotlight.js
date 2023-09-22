import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Spotlight({
  pieces,
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/art-pieces/${pieces.slug}`);
  };

  return (
    <ImageWrapper>
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
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  margin: 0 auto 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  position: relative;
  margin-top: 15px;
  width: 95vw;
  height: calc(100vh - 310px);
`;

const NextImage = styled(Image)`
  object-fit: contain;
  cursor: pointer;
`;
