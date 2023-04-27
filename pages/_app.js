import GlobalStyle from "../styles";
import useSWR from "swr";
import React, { useState } from "react";
import Heading from "../components/Heading/index.js";
import Nav from "../components/nav";
import Footer from "../components/Footer";
import { artPiecesEntries } from "../lib/localStoreageTemplate";
import useLocalStorageState from "use-local-storage-state";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function App({ Component, pageProps }) {
  const [randomArt, setRandomArt] = useState({})
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    {
      defaultValue: artPiecesEntries,
    }
  );

  const { data, error, isLoading, mutate } = useSWR(URL, fetcher);
  if (error) return <h2>Failed to load</h2>;
  if (isLoading) return <h2>Loading...</h2>;

  function handleToggleFavorite(slug) {
    const pieceToUpdate = artPiecesInfo.find(
      (artPiece) => artPiece.slug === slug
    );
    if (pieceToUpdate) {
      setArtPiecesInfo(
        artPiecesInfo.map((artPiece) =>
          artPiece.slug === slug
            ? { ...artPiece, isFavorite: !artPiece.isFavorite }
            : artPiece
        )
      );
    } else {
      const newArtPiece = {
        slug: slug,
        isFavorite: true,
        comments: [],
      };
      setArtPiecesInfo([...artPiecesInfo, newArtPiece]);
    }
  }
  

  return (
    <>
      {console.log(artPiecesInfo)}
      {/* {console.log(data)} */}
      <GlobalStyle />
      <Heading />
      <Nav data={data} />
      <Component
        {...pageProps}
        data={data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
      />

      <Footer />
    </>
  );
}
