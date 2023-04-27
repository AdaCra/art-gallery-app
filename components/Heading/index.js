import Link from "next/link";

export default function Heading() {
  return (
    <header id="header">
      <Link href={"/"}>
        <h1 id="header__title">C&apos;est la vie Gallery</h1>
      </Link>
      <p id="header__slogan">
        The gallery for every user type under the sun...apparently
      </p>
    </header>
  );
}
