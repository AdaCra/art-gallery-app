import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for styling
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  text-align: center;
`;

const Introduction = styled.p`
  font-size: 18px;
  margin: 20px 0;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 16px;
  margin: 10px;
`;

export default function HomePage({ data, onToggleFavorite, artPiecesInfo }) {
  const [showPopup, setShowPopup] = useState(true);

  // Function to hide the popup
  const hidePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
    <Wrapper>
      {showPopup && (
        <Popup>
          This website uses cookies to save user content.
          <button onClick={hidePopup}>Got it!</button>
        </Popup>
      )}
      <div>
      <h1>You have arrived at</h1>
      <h1>Galerie: Ce la Vie</h1>
      </div>

      <Introduction>
        Where Art enters your life.
      </Introduction>
      
      <LinksContainer>
        <Link href="#">Grid View</Link>
        <Link href="#">Tile View</Link>
        <Link href="#">Spotlight</Link>
        <Link href="#">Favorites</Link>
        <Link href="#">About</Link>
      </LinksContainer>
    </Wrapper>
    </>
  );
}

