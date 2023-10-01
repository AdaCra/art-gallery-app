import React from "react";
import styled from "styled-components";

export default function HomePage({ data }) {
  return (
    <>
      <Wrapper>
        <HeadingDiv>
          <SuperSpanHeading>You have arrived at</SuperSpanHeading>
          <h1>Galerie: C&apos;est la Vie</h1>
        </HeadingDiv>

        <Introduction>Where Art enters your life.</Introduction>

        <h2>Please select which link you wish to go to</h2>
        <LinksContainer>
          <Link href={"/grid"}>Grid View</Link>
          <Link href={`/tile/${data[0].slug}`}>Tile View</Link>
          <Link href={`spotlight`}>Spotlight</Link>
          <Link href={`favorites`}>Favorites</Link>
          <Link href={`about`}>About</Link>
        </LinksContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  height: 100%;
  text-align: center;
  margin-bottom: 100px;
`;

const SuperSpanHeading = styled.div`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-style: italic;
  color: var(--dm_text_color_main);
  @media (max-width: 510px) {
    font-size: 18px;
  }
`;
const HeadingDiv = styled.div`
  margin-top: 20vh;
`;

const Introduction = styled.p`
  font-size: 18px;
  margin: 20px 0;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const Link = styled.a`
  text-decoration: none;
  width: 20%;
  color: var(--dm_text_color_title);
  font-weight: bold;
  font-size: 16px;
  margin: 10px;
`;
