import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Define cubic bezier curves
const easeIn = 'cubic-bezier(0.4, 0, 1, 1)';
const easeOut = 'cubic-bezier(0, 0, 0.2, 1)';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: blue; /* Initial background color */
`;

const Text = styled.p`
  animation: ${fadeIn} 4s ${easeIn}, ${fadeOut} 4s ${easeOut} 4s;
  animation-fill-mode: forwards;
`;

const Title = styled.h1`
  animation: ${fadeIn} 4s ${easeIn}, ${fadeOut} 4s ${easeOut} 4s;
  animation-fill-mode: forwards;
`;

const Warning = styled.div`
  animation: ${fadeIn} 4s ${easeIn};
`;

const IndexPage = () => {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (phase < 4) {
        setPhase(phase + 1);
      }
    }, 3000); // Wait 8 seconds between phases

    return () => clearTimeout(timeout);
  }, [phase]);

  return (
    <Container>
      {phase === 1 && <Text>Welcome</Text>}
      {phase === 2 && <Text>you have arrived at</Text>}
      {phase === 3 && <Title>Galerie Ce la Vie</Title>}
      {phase === 4 && (
        <Warning>
          <h2>Please be aware:</h2>
          <p>This site uses cookies to store your favorite images and any personal private comments</p>
          <button>flee this place</button>
          <button>agree</button>
        </Warning>
      )}
    </Container>
  );
};

export default IndexPage;