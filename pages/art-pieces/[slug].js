import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  const currentArt = data.find((art) => art.slug === slug);
  const currentIndex = data.indexOf(currentArt);
  return (
    <>
      <section key={currentArt.slug}>
        <div className="artPieceDetails__artwork">
          <Image
            src={currentArt.imageSource}
            alt={currentArt.name}
            width={currentArt.dimensions.width / 3}
            height={currentArt.dimensions.height / 3}
          />
        </div>
        <div className="artPieceDetails__information">
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
