export default function CommentList({ slug, artPiecesInfo, title }) {
  const hasObjectWithSlug = artPiecesInfo.some((obj) => obj.slug === slug);
  const currentArt = artPiecesInfo.find((art) => art.slug === slug);
  console.log(slug)
  console.log(artPiecesInfo)
  return (
    <>
      {hasObjectWithSlug === true ? (
        currentArt.comments.map((comment) => {
        return (
          <section key={comment.id}>
            <h5>
              {comment.time} {comment.date}
            </h5>
            <p>{comment.comment}</p>
            <button type="">🗑️</button>
          </section>
        );
      })
      ) : (
        <section>
            <h5>
              There are no Personal Comments for {title}
            </h5>
          </section> 
      )}
      {/*  */}
    </>
  );
}
