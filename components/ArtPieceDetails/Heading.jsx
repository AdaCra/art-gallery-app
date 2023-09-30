import { useRouter } from "next/router";
import styled from "styled-components";
import { highlightStyles } from "../Nav/MenuBar";
import { useEffect, useState } from "react";

export default function DetailsPageHeading() {
  const router = useRouter();
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
    <div>
      <h2>Art Details</h2>
      <HeadingLinks>
        <SkimButton onClick={() => router.back()} $mobile={isMobile}>
          &#9001;&#9001; Back
        </SkimButton>
        <SkimButton onClick={() => router.push("/grid")} $mobile={isMobile}>
          Grid &#9783;
        </SkimButton>
      </HeadingLinks>
    </div>
  );
}

const HeadingLinks = styled.section`
  margin: 0 0 20px;
  padding: 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  text-align: center;
  alignvertical-: bottom;
`;

const SkimButton = styled.button`
  border: none;
  background: transparent;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: var(--dm_text_color_title);
  vertical-align: middle;
  opacity: 0.5;

  &: ${({ $mobile }) => ($mobile ? `active` : `hover`)} {
    ${highlightStyles}
  }
`;
