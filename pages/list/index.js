import Image from "next/image";
import Link from "next/link";

export default function List({ data }) {
  return (
    <>
      {data.map((art) => {
        return (
          <section key={art.slug}>
            <div className="artTile__artwork">
              <Image
                src={art.imageSource}
                alt={art.name}
                width={art.dimensions.width / 10}
                height={art.dimensions.height / 10}
              />
            </div>
            <div className="artTile__information">
              <p>
                Name of artwork:&nbsp;<em>{art.name}</em>
              </p>
              <p>
                Artist:&nbsp;<em>{art.artist}</em>
              </p>
            </div>
          </section>
        );
      })}
    </>
  );
}
