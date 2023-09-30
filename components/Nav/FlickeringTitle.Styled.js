import styled from "styled-components";

export const TitleWrapper = styled.div`
  width: 100vw;
  display: flex;
`;

export const TitleName = styled.h1`
  cursor: pointer;
  margin: 0 auto;
  padding: 1em 20px;
  height: 250px;
  color: var(--dm_text_color_title);
  text-shadow: 0px 0px 4px var(--dm_text_color_title),
    0px 0px 8px var(--dm_text_color_title),
    0px 0px 16px var(--dm_text_color_title), 3px 3px 10px #d42cca,
    -3px 3px 10px #d42cca, -3px -3px 10px #d42cca, -3px 3px 10px #d42cca,
    6px 6px 40px #d42cca, 6px -6px 40px #d42cca, -6px -6px 40px #d42cca,
    -6px 6px 40px #d42cca;
`;

export const TitleFlicker = styled.span`
  color: var(--dm_text_color_title);
  text-shadow: 0px 0px 4px var(--dm_text_color_title), 0px 0px 8px var(--dm_text_color_title), 0px 0px 16px var(--dm_text_color_title),
    3px 3px 10px #d42cca, -3px 3px 10px #d42cca, -3px -3px 10px #d42cca,
    -3px 3px 10px #d42cca, 6px 6px 40px #d42cca, 6px -6px 40px #d42cca,
    -6px -6px 40px #d42cca, -6px 6px 40px #d42cca;
    
    @keyframes flicker {
      20%, 29.5%, 39%, 40%, 41%, 52%, 100% {
        opacity: .99;
        text-shadow: 0px 0px 4px var(--dm_text_color_title), 0px 0px 8px var(--dm_text_color_title), 0px 0px 16px var(--dm_text_color_title),
    3px 3px 10px #d42cca, -3px 3px 10px #d42cca, -3px -3px 10px #d42cca,
    -3px 3px 10px #d42cca, 6px 6px 40px #d42cca, 6px -6px 40px #d42cca,
    -6px -6px 40px #d42cca, -6px 6px 40px #d42cca;
        
      }
      30%,39.5%, 40.5%, 52.5%, 99.5% {
        opacity: 0.3;
        text-shadow: none;
      }
`;
export const LineBreak = styled.br`
  display: none;
  @media (max-width: 510px) {
    display: inline;
  }
`;
