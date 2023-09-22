import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styled from "styled-components";
import { highlightStyles } from "../../Nav/MenuBar";

export default function NextPrevButtons({ currentArt, data }) {
  const router = useRouter();
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

  return (
    <ButtonWrapper>
      <>
        <SkimButton
          $mobile={isMobile}
          onClick={() => {
            router.push(`/tile/${data[previousArt].slug}`);
          }}
        >
          &#9001;&#9001;
        </SkimButton>
        <SkimButton
          $mobile={isMobile}
          onClick={() => {
            router.push(`/tile/${data[nextArt].slug}`);
          }}
        >
          &#9002;&#9002;
        </SkimButton>
      </>
    </ButtonWrapper>
  );
}

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
