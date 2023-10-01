import { useState } from "react";

import styled from "styled-components";
import FlickeringTitle from "./FlickeringTitle";
import MenuBar from "./MenuBar";
import BurgerButton from "./BurgerButton";

export default function Nav({ data }) {
  // State to manage the visibility of the menu on small screens
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <NavWrapper>
      <NavBox>
        <FlickeringTitle />
        <BurgerButton menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <NavList $menuIsOpen={menuIsOpen}>
          <MenuBar data={data} menuIsOpen={menuIsOpen} />
        </NavList>
      </NavBox>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
   {
    position: relative;
    height: 230px;
  }
`;

const NavBox = styled.div`
   {
    z-index: 1;
    position: fixed;
    text-align: center;
    background-color: var(--dm_background_base);
    height: 210px;
    max-width: 100vw;
  }
`;

const NavList = styled.ul`
  position: absolute;
  top: 200px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  text-align: center;
  background-color: var(--dm_background_base);

  @media (max-width: 510px) {
    display: ${({ $menuIsOpen }) => ($menuIsOpen ? "flex" : "none")};
    top: 200px;
    right: 0;
    width: 150px;
    flex-direction: column;
    text-align: left;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    width: 100%;
    height: 2px;
    background: var(--dm_text_color_title);
    border-radius: 2px;
    box-shadow: 0px 0px 4px var(--dm_text_color_title),
      0px 0px 8px var(--dm_text_color_title),
      0px 0px 16px var(--dm_text_color_title), 2px 2px 3px #d42cca,
      2px -2px 3px #d42cca, -2px -2px 3px #d42cca, -2px 2px 3px #d42cca;
  }
`;
