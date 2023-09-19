import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../Favorite";
import styled from "styled-components";

export default function ArtPieces({
  pieces,
  imageScale,
  onToggleFavorite,
  artPiecesInfo,
  Use,
}) {
  const ImageWrapper = styled.div`
    z-index: 0;
    position: relative;
    width: 80vw;
  `;

  const imageWidthRatio = pieces.dimensions.height / imageScale;
  return (
    <>
      <ImageWrapper>
        <Link href={`/art-pieces/${pieces.slug}`}>
          <Image
            src={pieces.imageSource}
            alt={pieces.name}
            width={pieces.dimensions.width / imageWidthRatio}
            height={imageScale}
            priority={false}
          />
        </Link>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          slug={pieces.slug}
          artPiecesInfo={artPiecesInfo}
        />
      </ImageWrapper>
      <div className="artList__information">
        <p className="artList__information__art">
          Name of artwork:&nbsp;<em>{pieces.name}</em>
        </p>
        <p className="artList__information__artist">
          Artist:&nbsp;<em>{pieces.artist}</em>
        </p>
      </div>
    </>
  );
}
