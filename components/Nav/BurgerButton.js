import React from "react";
import {
  OpenButtonBurger,
  ClosedButtonBurger,
  ButtonWrapper,
  MenuButton,
} from "./BurgerButton.Styled";

export default function BurgerButton({menuIsOpen, setMenuIsOpen}) {
  const setOpenedState = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const MenuButtonBurger = ({ tagName }) => {
    if (tagName === "BurgerOpen") {
      return <OpenButtonBurger className="OPEN" />;
    }
    return <ClosedButtonBurger className="CLOSED" />;
  };
  return (
    <>
      <ButtonWrapper>
        <MenuButton
        onClick={() => {
          setOpenedState();
        }}
          
        >
          <MenuButtonBurger
            tagName={menuIsOpen ? "BurgerOpen" : "BurgerClosed"}
          ></MenuButtonBurger>
        </MenuButton>
      </ButtonWrapper>
    </>
  );
}
