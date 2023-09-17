import Link from "next/link";
import styled from "styled-components";

export default function Heading() {
  return (
    <Nav>
      <TitleName>Galerie: C&apos;est la vie</TitleName>
      <button>box</button>
    </Nav>
  );
}

const Nav = styled.div`
   {
    display: flex;
    position: relative;
    padding: 0.1rem;
    background-color: #f5f5f5;
    text-align: center;
  }
`;

const TitleName = styled.h1`
  cursor: pointer;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 390px;
`;

const Hamburger = styled.button`
  display: visible;
`;
