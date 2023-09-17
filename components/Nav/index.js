import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import FlickeringTitle from "./FlickeringTitle";
import MenuBar from "./MenuBar";

export default function Nav({ data }) {
  const router = useRouter();
  const currentUrl = router.asPath;

  // State to manage the visibility of the menu on small screens
  const [menuVisible, setMenuVisible] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <NavBox>
        <FlickeringTitle />
        {/* burgermenu goes here */}
        <NavList>
        <MenuBar data={data} />
        </NavList>
      </NavBox>
    </>
  );
}

const NavBox = styled.div`
   {
    display: flex;
    flex-direction: column;
    position: relative;
    text-align: center;

    background-color: var(--dm_background_base);
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  text-align: center;
  @media (max-width: 510px) {
    display: none;
  }
`;
const BurgerMenu = styled.ul`
  margin: 0;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  text-align: center;
  @media (max-width: 510px) {
    display: none;
  }
`;