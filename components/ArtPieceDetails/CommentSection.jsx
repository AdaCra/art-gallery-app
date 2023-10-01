import styled from "styled-components";
import Comment from "../Comment";
import CommentList from "../CommentList";

export default function CommentSection({
  currentArt,
  handleCommentSubmit,
  artPiecesInfo,
  handleCommentDelete,
}) {
  return (
    <CommentWrapper>
      <h3>Thoughts & Feelings</h3>
      <Comment
        slug={currentArt.slug}
        handleCommentSubmit={handleCommentSubmit}
      />
      <CommentList
        slug={currentArt.slug}
        artPiecesInfo={artPiecesInfo}
        title={currentArt.name}
        handleCommentDelete={handleCommentDelete}
      />
    </CommentWrapper>
  );
}

const CommentWrapper = styled.section`
  margin-bottom: 70px;
`;
