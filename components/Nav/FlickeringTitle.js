import { LineBreak, TitleFlicker, TitleName } from "./FlickeringTitle.Styled";


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
      <LineBreak />
      C&apos;est la{" "}
      <TitleFlicker
        style={{ animation: `flicker 20s linear infinite alternate` }}
      >
        vie
      </TitleFlicker>
    </TitleName>
  );
}
