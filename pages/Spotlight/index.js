import Link from "next/link";
import Image from "next/image";

export default function Tile({data}) {
    
  const spotlight = data[Math.floor(Math.random() * data.length)]

  return (
    <>
      <section >
        <div className="artTile__artwork">
          <Image
            src={spotlight.imageSource}
            alt={spotlight.name}
            width={spotlight.dimensions.width / 3}
            height={spotlight.dimensions.height / 3}
          />
        </div>
        <div className="artTile__information">
          <p>
            Name of artwork:&nbsp;<em>{spotlight.name}</em>
          </p>
          <p>
            Artist:&nbsp;<em>{spotlight.artist}</em>
          </p>
        </div>
      </section>
    </>
  );
}
