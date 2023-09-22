import styled from "styled-components";
import ArtPieces from "../../components/ArtPieces";

export default function Grid({ data, onToggleFavorite, artPiecesInfo }) {
  return (
    <ListDisplaySection>
      <h2>Grid Gallery</h2>

      <GridItem>
        {data.map((art, index) => {
          return (
            <section key={index}>
              <ArtPieces
                pieces={art}
                artPiecesInfo={artPiecesInfo}
                onToggleFavorite={onToggleFavorite}
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
