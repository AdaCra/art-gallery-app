import useSWR from "swr";
import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer";
import {
  artPiecesEntries,
  initialCookiesAllowed,
} from "../lib/localStoreageTemplate";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import "./globals.css";
import { fetcher } from "../components/Functions/fetcher/fetcher";
import { turnOnCookies } from "../components/Functions/turnOnCookies/turnOnCookies";
import EntryPage from "../components/EntryPage/EntryPage";

const URL = "https://example-apis.vercel.app/api/art";

fetcher;

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    {
      defaultValue: artPiecesEntries,
    }
  );

  const [cookiesAllowed, setCookiesAllowed] = useLocalStorageState(
    "cookiesAllowed",
    {
      defaultValue: initialCookiesAllowed,
    }
  );
    
  function handleTurnOnCookies() {
    turnOnCookies(setCookiesAllowed);
  }



  const { data, error, isLoading } = useSWR(URL, fetcher);
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
  function handleCommentSubmit(slug, comment) {
    const pieceToUpdate = artPiecesInfo.find(
      (artPiece) => artPiece.slug === slug
    );

    const id = uid();
    const date = new Date().toLocaleDateString("en-uk");
    const time = new Date().toLocaleTimeString("en-uk");

    if (pieceToUpdate) {
      const updatedArtPiecesInfo = artPiecesInfo.map((artPiece) => {
        if (artPiece.slug === slug) {
          const updatedComments = [
            ...artPiece.comments,
            { id, date, time, comment },
          ];
          return { ...artPiece, comments: updatedComments };
        } else {
          return artPiece;
        }
      });
      setArtPiecesInfo(updatedArtPiecesInfo);
    } else {
      const newArtPiece = {
        slug: slug,
        isFavorite: false,
        comments: [
          { id: { id }, date: { date }, time: { time }, comment: { comment } },
        ],
      };
      setArtPiecesInfo([...artPiecesInfo, newArtPiece]);
    }
  }

  return (
    <>
      {cookiesAllowed.cookiesAllowed === false ? (
        <EntryPage/>
        // <>
        //   <h1>blah blah blah</h1>
        //   <button
        //     onClick={handleTurnOnCookies}
        //   >
        //     Allow
        //   </button>
        //   <button>Leave</button>
        // </>
      ) : (
        <>
          <Nav data={data} />
          <Component
            {...pageProps}
            data={data}
            artPiecesInfo={artPiecesInfo}
            onToggleFavorite={handleToggleFavorite}
            handleCommentSubmit={handleCommentSubmit}
          />
          <Footer />
        </>
      )}
    </>
  );
}

