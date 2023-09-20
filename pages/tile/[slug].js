import { useRouter } from "next/router";

import ArtPieces from "../../components/ArtPieces";
import styled from "styled-components";
import { highlightStyles } from "../../components/Nav/MenuBar";
import { useEffect, useState } from "react";
import { toTitleCase } from "../../components/Functions/toTitleCase/toTitleCase";
import ArtPieceTile from "../../components/ArtPieceTile";

export default function Tile({ data, onToggleFavorite, artPiecesInfo }) {
  const router = useRouter();
  const { slug } = router.query;
  const currentArt = data.find((art) => art.slug === slug);
  const currentIndex = data.indexOf(currentArt);
  const nextArt = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
  const previousArt = currentIndex === 0 ? data.length - 1 : currentIndex - 1;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    );
  }, []);

  const correctedName = toTitleCase(currentArt.artist);

  return (
    <TileDisplaySection>
      <ButtonWrapper>
        <SkimButton
          $mobile={isMobile}
          onClick={() => {
            router.push(`/tile/${data[previousArt].slug}`);
          }}
        >
          &#9001;&#9001;
        </SkimButton>
        <SkimButton
          onClick={() => {
            router.push(`/tile/${data[nextArt].slug}`);
          }}
        >
          &#9002;&#9002;
        </SkimButton>
      </ButtonWrapper>
      <h2>{currentArt.name}</h2>
      <AuthorH2>by {correctedName}</AuthorH2>

      <ArtPieceTile
        pieces={currentArt}
        imageScale={800}
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

const ButtonWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 510px) {
    padding: 0 5px;
  }
`;

const SkimButton = styled.button`
  z-index: 2;
  border: none;
  background: transparent;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-size: 30px;
  color: var(--dm_text_color_title);
  vertical-align: middle;

  &: ${({ $mobile }) => ($mobile ? `active` : `hover`)} {
    ${highlightStyles}
  }
`;

const AuthorH2 = styled.h2`
  font-style: italic;
  font-size: 17px;
  padding-top: 5px;
  @media (max-width: 510px) {
    font-size: 14px;
  }
`;
