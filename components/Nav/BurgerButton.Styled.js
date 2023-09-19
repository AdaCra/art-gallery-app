import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin: 0;
  padding: 0;
  postion: relative;
`;
export const MenuButton = styled.div`
  position: absolute;
  bottom:5px;
  right:5px;
  margin: 0;
  padding: 0;
  display: none;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media (max-width: 510px) {
    display: flex;
  }
  }
`;

export const ClosedButtonBurger = styled.div`
  width: 30px;
  height: 2px;
  background: var(--dm_text_color_title);
  border-radius: 5px;
  box-shadow: 0px 0px 4px var(--dm_text_color_title),
    0px 0px 8px var(--dm_text_color_title),
    0px 0px 16px var(--dm_text_color_title), 2px 2px 3px #d42cca,
    2px -2px 3px #d42cca, -2px -2px 3px #d42cca, -2px 2px 3px #d42cca;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 30px;
    height: 2px;
    background: var(--dm_text_color_title);
    border-radius: 2px;
    box-shadow: 0px 0px 4px var(--dm_text_color_title),
      0px 0px 8px var(--dm_text_color_title),
      0px 0px 16px var(--dm_text_color_title), 2px 2px 3px #d42cca,
      2px -2px 3px #d42cca, -2px -2px 3px #d42cca, -2px 2px 3px #d42cca;
  }

  &::before {
    transform: translateY(-10px);
  }

  &::after {
    transform: translateY(10px);
  }
`;

export const OpenButtonBurger = styled(ClosedButtonBurger)`
  background: none;
  box-shadow: none;

  &::before,
  &::after {
    opacity: .9;
    box-shadow: none;
    box-shadow: 0px 0px 4px var(--dm_text_color_title), 0px 0px 8px var(--dm_text_color_title), 0px 0px 16px var(--dm_text_color_title),
  2px 2px 3px #d42cca, 2px -2px 3px #d42cca, -2px -2px 3px #d42cca,
  -2px 2px 3px #d42cca;
  }
  &::before {
    transform: rotate(45deg);    
    animation: stall 5s linear infinite alternate;
    box-shadow: 0px 0px 4px var(--dm_text_color_title), 0px 0px 8px var(--dm_text_color_title), 0px 0px 16px var(--dm_text_color_title),
  2px 2px 3px #d42cca, 2px -2px 3px #d42cca, -2px -2px 3px #d42cca,
  -2px 2px 3px #d42cca;
}
&::after {
    transform: rotate(-45deg);
    
    box-shadow: 0px 0px 4px var(--dm_text_color_title), 0px 0px 8px var(--dm_text_color_title), 0px 0px 16px var(--dm_text_color_title),
  2px 2px 3px #d42cca, 2px -2px 3px #d42cca, -2px -2px 3px #d42cca,
  -2px 2px 3px #d42cca;
  }

  @keyframes stall {
    20%, 29.5%, 39%, 40%, 41%, 52%, 100% {
      opacity: .99;
      box-shadow: 0px 0px 4px var(--dm_text_color_title), 0px 0px 8px var(--dm_text_color_title), 0px 0px 16px var(--dm_text_color_title),
  2px 2px 3px #d42cca, 2px -2px 3px #d42cca, -2px -2px 3px #d42cca,
  -2px 2px 3px #d42cca;
      
    }
    30%,39.5%, 40.5%, 52.5%, 99.5% {
      opacity: 0.3;
      box-shadow: none;
    }
`;
