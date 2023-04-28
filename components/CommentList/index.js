export default function CommentList({ slug, artPiecesInfo }) {
  const currentArt = artPiecesInfo.find((art) => art.slug === slug);
  const currentArtComments = currentArt.comments;
  return (
    <>
      {currentArt.comments.map((comment) => {
        return (
          <section key={comment.id}>
            <h5>
              {comment.time} {comment.date}
            </h5>
            <p>{comment.comment}</p>
            <button type="">🗑️</button>
          </section>
        );
      })}
    </>
  );
}
