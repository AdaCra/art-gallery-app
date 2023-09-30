import ArtPieceTile from "../ArtPieceTile";
import styled from "styled-components";
import ColourGrid from "./ColourPallette";
import DetailsPageHeading from "./Heading";
import ArtworkInfo from "./DetailInfo";
import CommentSection from "./CommentSection";

export default function ArtPieceDetails({
  currentArt,
  artPiecesInfo,
  onToggleFavorite,
  handleCommentSubmit,
  handleCommentDelete,
}) {
  return (
    <DetailsDisplayContainer>
      <DetailsPageHeading />

      <DetailsSection>
        <ImageToTextDivider>
          <ArtPieceTile
            pieces={currentArt}
            onToggleFavorite={onToggleFavorite}
            artPiecesInfo={artPiecesInfo}
          />
        </ImageToTextDivider>
        <ImageToTextDivider>
          <ArtworkInfo
            onToggleFavorite={onToggleFavorite}
            currentArt={currentArt}
            artPiecesInfo={artPiecesInfo}
          />

          <br />

          <ColourGrid array={currentArt.colors} />

          <br />

          <CommentSection
            currentArt={currentArt}
            handleCommentSubmit={handleCommentSubmit}
            handleCommentDelete={handleCommentDelete}
            artPiecesInfo={artPiecesInfo}
          />
        </ImageToTextDivider>
      </DetailsSection>
    </DetailsDisplayContainer>
  );
}

const DetailsDisplayContainer = styled.section`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: calc(100vh - 280px);
  text-align: center;
`;

const ImageToTextDivider = styled.div`
  position: relative;
  text-align: left;
  padding: 0 4%;
  width: 50%;
  @media (max-width: 710px) {
    width: 100%;
  }
`;

const DetailsSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 710px) {
    flex-direction: column;
  }
`;
