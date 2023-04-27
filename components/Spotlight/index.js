import Image from "next/image";
import Link from "next/link";

export default function Spotlight({ pieces, imageScale }) {
  const imageWidthRatio = pieces.dimensions.height / imageScale;
  return (
    <>
      <div className="artList__artwork">
        <Link href={`/art-pieces/${pieces.slug}`}>
          <Image
            src={pieces.imageSource}
            alt={pieces.name}
            width={pieces.dimensions.width / imageWidthRatio}
            height={imageScale}
          />
        </Link>
      </div>
      <div className="artList__information">
        <h3 className="artList__information__artist">
          Artist:&nbsp;<em>{pieces.artist}</em>
        </h3>
      </div>
    </>
  );
}
