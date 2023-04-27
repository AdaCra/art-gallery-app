import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ArtPieceDetails({ currentArt }) {
  const router = useRouter();

  return (
    <>
      <section>
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
        {console.log(currentArt.colors)}
        <div>
          {currentArt.colors.map((color, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundColor: color,
                  width: "150px",
                  height: "30px",
                }}
              ></div>
            );
          })}
        </div>
        <button onClick={() => router.back()}>Go Back</button>
        <button onClick={() => router.push("/list")}>Go to List</button>
      </section>
    </>
  );
}