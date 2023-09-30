import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import styled from "styled-components";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <ConsentRapper>
      <ConsentContainer>
        <ConsentText>
          This website uses cookies that allow users to save personal inputs and favourites and contain only data in relation to the artworks loaded on this site.
        </ConsentText>
        <ConsentButton onClick={() => acceptCookie()}>Accept</ConsentButton>
      </ConsentContainer>
    </ConsentRapper>
  );
}

const ConsentRapper = styled.div`
  z-index: 5;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(107, 114, 128, 0.7);
`;

const ConsentContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 4px;
  padding-right: 4px;
  background-color: #f3f4f6;
`;

const ConsentText = styled.p`
  color: #333333;
  font-size: 1rem;
  margin-right: 16px;
`;

const ConsentButton = styled.button`
  background-color: #10b981;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 0.25rem;
  color: #ffffff;
`;
