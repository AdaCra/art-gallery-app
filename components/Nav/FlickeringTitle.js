import {
  LineBreak,
  TitleFlicker,
  TitleName,
  TitleWrapper,
} from "./FlickeringTitle.Styled";
import { useRouter } from "next/router";

export default function FlickeringTitle() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <TitleWrapper>
      <TitleName onClick={handleClick}>
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
    </TitleWrapper>
  );
}
