import Image from "next/image";
import Link from "next/link";
import ArtPieces from "../../components/ArtPieces";

export default function List({ data }) {
  return (
    <>
      {data.map((art, index) => {
        return (
          <section key={index}>
            <ArtPieces pieces={art} imageScale={250} />
          </section>
        );
      })}
    </>
  );
}
