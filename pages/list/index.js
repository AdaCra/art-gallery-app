import Image from "next/image";
import Link from "next/link";

export default function List({ data }) {
  return (
    <>
      {data.map((art) => {
        return (
          <section key={art.slug}>
            <div className="artList__artwork">
              <Image
                src={art.imageSource}
                alt={art.name}
                width={art.dimensions.width / 10}
                height={art.dimensions.height / 10}
              />
            </div>
            <div className="artList__information">
                
              <p className="artList__information__art">
                Name of artwork:&nbsp;<em>{art.name}</em>
              </p>
              <p className="artList__information__artist">
                Artist:&nbsp;<em>{art.artist}</em>
              </p>
            </div>
          </section>
        );
      })}
    </>
  );
}
