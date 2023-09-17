import React from "react";
import { useState } from "react";
import styled from "styled-components";

const ButtonGeneral = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  display: none;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 1s ease-in-out;

  .BurgerOpen{

  }
  .BurgerClosed{

  }

  @media (max-width: 510px) {
    display: flex;
  }
  }
`;
const MenuButtonOpen = styled(ButtonGeneral)``;
const MenuButtonClosed = styled(ButtonGeneral)``;
const BurgerButton = styled.div`
  width: 30px;
  height: 3px;
  background: var(--dm_text_color_title);
  border-radius: 5px;
  box-shadow: 0px 0px 4px #ffd5ff, 0px 0px 8px #ffd5ff, 0px 0px 16px #ffd5ff,
    3px 3px 5px #d42cca, 3px -3px 5px #d42cca, -3px -3px 5px #d42cca,
    -3px 3px 5px #d42cca;
  transition: all 1s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 30px;
    height: 3px;
    background: var(--dm_text_color_title);
    border-radius: 5px;
    box-shadow: 0px 0px 4px #ffd5ff, 0px 0px 8px #ffd5ff, 0px 0px 16px #ffd5ff,
      2px 2px 3px #d42cca, 2px -2px 3px #d42cca, -2px -2px 3px #d42cca,
      -2px 2px 3px #d42cca;
    transition: all 1s ease-in-out;
  }

  &::before {
    transform: translateY(-10px);
  }

  &::after {
    transform: translateY(10px);
  }
`;

export default function BurgerTime({ data }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const setOpenedState = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  console.log(menuIsOpen);
  return (
    <>
      {console.log(menuIsOpen)}
      <ButtonGeneral
        className={menuIsOpen ? "BurgerOpen" : "BurgerClosed"}
        onClick={() => {
          setOpenedState();
        }}
      >
        <BurgerButton></BurgerButton>
      </ButtonGeneral>
    </>
  );
}
