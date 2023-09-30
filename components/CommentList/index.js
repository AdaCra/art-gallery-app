import styled from "styled-components";
import { useEffect, useState } from "react";

import { highlightStyles } from "../Nav/MenuBar";

export default function CommentList({
  slug,
  artPiecesInfo,
  handleCommentDelete,
}) {
  const hasObjectWithSlug = artPiecesInfo.some((obj) => obj.slug === slug);
  const currentArt = artPiecesInfo.find((art) => art.slug === slug);

  const handleDeleteClick = (commentId) => {
    handleCommentDelete(slug, commentId);
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    );
  }, []);

  return (
    <>
      {hasObjectWithSlug === true ? (
        currentArt.comments.map(
          (comment, index) =>
            index > 0 && (
              <CommentPiece key={comment.id}>
                <DateTag>
                  {comment.time} {comment.date}
                </DateTag>
                <CommentWrapper>
                  <CommentText>{comment.comment}</CommentText>
                  <SkimButton
                    title="Delete Comment"
                    type="button"
                    onClick={() => handleDeleteClick(comment.id)}
                  >
                    &#9851;
                  </SkimButton>
                </CommentWrapper>
              </CommentPiece>
            )
        )
      ) : (
        <></>
      )}
    </>
  );
}

const CommentPiece = styled.section`
  position: relative;
  margin-top: 10px;
  width: 100%;
  padding: 30px 20px 15px;
  border: 2px solid;
  border-radius: 10px;
`;

const DateTag = styled.p`
  position: absolute;
  top: 3px;
  right: 5px;
  font-size: 12px;
  font-style: italic;
`;
const CommentText = styled.p`
  font-style: italic;
  width: 75%;
  height: 100%;
  vertical-align: center;
`;

const SkimButton = styled.button`
  z-index: 1;
  border: none;
  background: transparent;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-size: 30px;
  color: var(--dm_text_color_title);
  vertical-align: middle;
  cursor: pointer;
  opacity: 0.5;

  &: ${({ $mobile }) => ($mobile ? `active` : `hover`)} {
    ${highlightStyles}
  }
`;

const CommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
