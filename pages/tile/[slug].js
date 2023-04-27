import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Tile({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  const currentArt = data.find((art) => art.slug === slug);
  const currentIndex = data.indexOf(currentArt)
  return (
    <>
      
          <section key={currentArt.slug}>
            <div className="artTile__artwork">
              <Image
                src={currentArt.imageSource}
                alt={currentArt.name}
                width={currentArt.dimensions.width / 3}
                height={currentArt.dimensions.height / 3}
              />
            </div>
            <div className="artTile__information">
              <p>
                Name of artwork:&nbsp;<em>{currentArt.name}</em>
              </p>
              <p>
                Artist:&nbsp;<em>{currentArt.artist}</em>
              </p>
            </div>
          </section>
        
      
    </>
  );
}
