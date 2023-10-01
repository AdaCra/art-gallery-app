import styled from "styled-components";
import ArtPieces from "../../components/ArtPieces";

export default function favorites({ data, onToggleFavorite, artPiecesInfo }) {
  const favoritesList = artPiecesInfo
    .filter((element) => {
      return element.isFavorite === true;
    })
    .map((element) => {
      return element.slug;
    });
  const onlyFavs = data.filter((element) =>
    favoritesList.includes(element.slug)
  );
  return (
    <ListDisplaySection>
      <h2>Favourites</h2>

      <GridItem>
        {onlyFavs.map((art, index) => {
          return (
            <section key={index}>
              <ArtPieces
                pieces={art}
                imageScale={250}
                onToggleFavorite={onToggleFavorite}
                artPiecesInfo={artPiecesInfo}
              />
            </section>
          );
        })}
      </GridItem>
    </ListDisplaySection>
  );
}

const ListDisplaySection = styled.section`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: calc(100vh - 280px);
  text-align: center;
`;

const GridItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content:center;
  padding 20px 30px;
`;
