import Image from "next/image";
import Link from "next/link";

export default function ArtPieces({ art, imageScale }) {
  return (
    <>
      <div className="artList__artwork">
        <Link href={`/art-pieces/${art.slug}`}>
          <Image
            src={art.imageSource}
            alt={art.name}
            width={art.dimensions.width / imageScale}
            height={art.dimensions.height / imageScale}
          />
        </Link>
      </div>
      <div className="artList__information">
        <p className="artList__information__art">
          Name of artwork:&nbsp;<em>{art.name}</em>
        </p>
        <p className="artList__information__artist">
          Artist:&nbsp;<em>{art.artist}</em>
        </p>
      </div>
    </>
  );
}
