import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function ArtPieceDetail({
  data,
  onToggleFavorite,
  artPiecesInfo,
  handleCommentSubmit,
  handleCommentDelete,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const currentArt = data.find((art) => art.slug === slug);
  return (
    <>
    
      <ArtPieceDetails
        currentArt={currentArt}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        handleCommentSubmit={handleCommentSubmit}
        handleCommentDelete={handleCommentDelete}
      />
    </>
  );
}
