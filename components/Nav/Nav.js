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
    width: 100vw;
    height: 100vh;
  }`

const NavBox = styled.div`
   {
    position: fixed;
    text-align: center;
    background-color: var(--dm_background_base);
    height: 250px;
    max-width: 100vw;
  }
`;

const NavList = styled.ul`
  position: absolute;
  top: 210px;
  margin: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  text-align: center;
  background-color: var(--dm_background_base);

  @media (max-width: 510px) {
    visibility: ${({ $menuIsOpen }) => ($menuIsOpen ? "visible" : "hidden")};
    top: 250px;
    right: 0;
    width: 150px;
    flex-direction: column;
    text-align: left;
  }
  }
`;
