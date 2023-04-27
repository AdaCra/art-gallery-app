import Link from "next/link";
import Image from "next/image";

export default function ArtPieceDetails({ data }) {
  const artpiecedetails = data[Math.floor(Math.random() * data.length)];

  return (
    <>
      <section>
        <div className="artPieceDetail__artwork">
          <Image
            src={artpiecedetails.imageSource}
            alt={artpiecedetails.name}
            width={artpiecedetails.dimensions.width / 3}
            height={artpiecedetails.dimensions.height / 3}
          />
        </div>
        <div className="artPieceDetail__information">
          <p>
            Name of artwork:&nbsp;<em>{currentArt.name}</em>
          </p>
          <p>
            Artist:&nbsp;<em>{currentArt.artist}</em>
          </p>
          <p>
            Year:&nbsp;<em>{currentArt.year}</em>
          </p>
          <p>
            Genre:&nbsp;<em>{currentArt.genre}</em>
          </p>
        </div>
      </section>
    </>
  );
}
