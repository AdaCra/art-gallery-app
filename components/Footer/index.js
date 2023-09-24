import Link from "next/link";
import styled from "styled-components";

const font = `
font-family: "Montserrat", Arial, Helvetica, sans-serif;
font-size: 12px;
font-weight: normal;
font-style: italic;
color: var(--dm_text_color_title);
`;

const FixedFooter = styled.div`
   {
    z-index: 1;
    position: fixed;
    bottom: 0px;
    background-color: var(--dm_background_base);
    height: 30px;
    width: 100vw;
    line-height: 25px;
    vertical-align: middle;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      margin: 0 auto;
      width: 100vw;
      height: 2px;
      background: var(--dm_text_color_title);
      border-radius: 2px;
      box-shadow: 0px 0px 4px var(--dm_text_color_title),
        0px 0px 8px var(--dm_text_color_title),
        0px 0px 16px var(--dm_text_color_title), 2px 2px 3px #d42cca,
        2px -2px 3px #d42cca, -2px -2px 3px #d42cca, -2px 2px 3px #d42cca;
    }
  }
`;

const FooterLink = styled(Link)`
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 5px;
  text-decoration: none;
  ${font}
`;

const TradeMark = styled.p`
-webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  cursor: default;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 5px;
  ${font}
`;

export default function Footer() {
  return (
    <FixedFooter>
      <FooterLink href={"/about"} id="footer__link">
        Impressum
      </FooterLink>
      <TradeMark>Adam Hannath, 2023&copy;</TradeMark>
    </FixedFooter>
  );
}
