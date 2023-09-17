import styled from "styled-components";

const TitleName = styled.h1`
  cursor: pointer;
  margin: 0 auto;
  padding: 1em 20px;
  max-width: 500px;
  color: var(--dm_text_color_title);
  text-shadow: 0px 0px 4px #ffd5ff, 0px 0px 8px #ffd5ff, 0px 0px 16px #ffd5ff,
    3px 3px 10px #d42cca, -3px 3px 10px #d42cca, -3px -3px 10px #d42cca,
    -3px 3px 10px #d42cca, 6px 6px 40px #d42cca, 6px -6px 40px #d42cca,
    -6px -6px 40px #d42cca, -6px 6px 40px #d42cca;
`;

const TitleFlicker = styled.span`
  color: var(--dm_text_color_title);
  transition:
  text-shadow: 0px 0px 4px #ffd5ff, 0px 0px 8px #ffd5ff, 0px 0px 16px #ffd5ff,
    3px 3px 10px #d42cca, -3px 3px 10px #d42cca, -3px -3px 10px #d42cca,
    -3px 3px 10px #d42cca, 6px 6px 40px #d42cca, 6px -6px 40px #d42cca,
    -6px -6px 40px #d42cca, -6px 6px 40px #d42cca;
    
    @keyframes flicker {
      20%, 29.5%, 39%, 40%, 41%, 52%, 100% {
        opacity: .99;
        text-shadow: 0px 0px 4px #ffd5ff, 0px 0px 8px #ffd5ff, 0px 0px 16px #ffd5ff,
    3px 3px 10px #d42cca, -3px 3px 10px #d42cca, -3px -3px 10px #d42cca,
    -3px 3px 10px #d42cca, 6px 6px 40px #d42cca, 6px -6px 40px #d42cca,
    -6px -6px 40px #d42cca, -6px 6px 40px #d42cca;
        
      }
      30%,39.5%, 40.5%, 52.5%, 99.5% {
        opacity: 0.3;
        text-shadow: none;
      }
`;
const LineBreak = styled.br`
  display: none;
  @media (max-width: 370px) {
    display: inline;
  }
`;

export default function FlickeringTitle() {
  return (
    <TitleName>
      <TitleFlicker
        style={{ animation: `flicker 8.5s linear infinite alternate` }}
      >
        G
      </TitleFlicker>
      <TitleFlicker
        style={{ animation: `flicker 9s linear infinite alternate` }}
      >
        aler
      </TitleFlicker>
      <TitleFlicker
        style={{ animation: `flicker 7s linear infinite alternate` }}
      >
        i
      </TitleFlicker>
      <TitleFlicker
        style={{ animation: `flicker 8s linear infinite alternate` }}
      >
        e:
      </TitleFlicker>
      {" "}
      <LineBreak/>
      C&apos;est la{" "}
      <TitleFlicker
        style={{ animation: `flicker 20s linear infinite alternate` }}
      >
        vie
      </TitleFlicker>
    </TitleName>
  );
}
