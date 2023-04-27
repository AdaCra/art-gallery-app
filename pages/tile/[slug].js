import { useRouter } from "next/router";

import ArtPieces from "../../components/ArtPieces";

export default function Tile({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  const currentArt = data.find((art) => art.slug === slug);
  const currentIndex = data.indexOf(currentArt);
  const nextArt = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
  const previousArt = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
  return (
    <>
      <section>
        <button
          onClick={() => {
            router.push(`/tile/${data[previousArt].slug}`);
          }}
        >
          previous
        </button>
        <div className="artTile__artwork">
          <ArtPieces art={currentArt} imageScale={800} />
        </div>
        <button
          onClick={() => {
            router.push(`/tile/${data[nextArt].slug}`);
          }}
        >
          next
        </button>
      </section>
    </>
  );
}
