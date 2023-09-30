import { useEffect, useState } from "react";
import styled from "styled-components";
import { highlightStyles } from "../Nav/MenuBar";

export default function Comment({ slug, handleCommentSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    handleCommentSubmit(slug, data.comment);
    event.target.reset();
  }
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
    <Form onSubmit={handleSubmit} name="artworkComment">
      <div>
        <TextInput
          type="text"
          name="comment"
          id="comment"
          placeholder="..."
          required
        />
        <br />
        <ThoughtButton type="submit" $mobile={isMobile}>
          Store Thoughts
        </ThoughtButton>
      </div>
    </Form>
  );
}
const Form = styled.form`
  text-align: center;
`;

const TextInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  background: none;
  border: 1px solid;
  border-radius: 5px;
`;

const ThoughtButton = styled.button`
  width: 50%;
  height: 40px;
  border: none;
  background: transparent;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: var(--dm_text_color_title);
  vertical-align: middle;
  cursor: pointer;
  opacity: 0.5;
  &: ${({ $mobile }) => ($mobile ? `active` : `hover`)} {
    ${highlightStyles}
  }
`;
