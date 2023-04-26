import GlobalStyle from "../styles";
import Image from "next/image";
import Link from "next/link";
import useSWR, { SWRConfig } from "swr";
import React from "react";
import Heading from "../components/Heading/index.js";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const URL = "https://example-apis.vercel.app/api/art";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function App({ Component, pageProps }) {
  const { data, error, isLoading, mutate } = useSWR(URL, fetcher);
  if (error) return <h2>Failed to load</h2>;
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <Heading />
      <Nav />
      {console.log(data)}
      <GlobalStyle />
      <Component {...pageProps} data={data} />
      {/* {data.map((art) => {
        return (
          <section key={art.slug}>
            <div className="artTile__artwork">
              <Image
                src={art.imageSource}
                alt={art.name}
                width={art.dimensions.width / 10}
                height={art.dimensions.height / 10}
              />
            </div>
            <div className="artTile__information">
              <p>
                Name of artwork:&nbsp;<em>{art.name}</em>
              </p>
              <p>
                Artist:&nbsp;<em>{art.artist}</em>
              </p>
            </div>
          </section>
        );
      })} */}
      <Footer />
    </>
  );
}
