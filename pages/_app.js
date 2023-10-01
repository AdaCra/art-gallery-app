import useSWR from "swr";
import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer";
import { artPiecesEntries } from "../lib/localStoreageTemplate";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import "./globals.css";
import { fetcher } from "../components/Functions/fetcher/fetcher";
import CookieConsent from "../components/Cookies/Cookies";

const URL = "https://example-apis.vercel.app/api/art";

fetcher;

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    {
      defaultValue: artPiecesEntries,
    }
  );

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

  function handleCommentDelete(slug, commentId) {
    const pieceToUpdate = artPiecesInfo.find(
      (artPiece) => artPiece.slug === slug
    );

    if (pieceToUpdate) {
      const updatedArtPiecesInfo = artPiecesInfo.map((artPiece) => {
        if (artPiece.slug === slug) {
          const updatedComments = artPiece.comments.filter(
            (comment) => comment.id !== commentId
          );
          return { ...artPiece, comments: updatedComments };
        } else {
          return artPiece;
        }
      });
      setArtPiecesInfo(updatedArtPiecesInfo);
    }
  }

  return (
    <>
      <CookieConsent />
      <title>Galerie: c&apos;est la Vie</title>
      <Nav data={data} />
      <Component
        {...pageProps}
        data={data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
        handleCommentSubmit={handleCommentSubmit}
        handleCommentDelete={handleCommentDelete}
      />
      <Footer />
    </>
  );
}
