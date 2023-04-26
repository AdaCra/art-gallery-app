import GlobalStyle from "../styles";
import Image from "next/image";
import Link from "next/link";
import useSWR, { SWRConfig } from "swr";
import React from "react";

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
      <h1>Gallery-App</h1>
      <p>nav</p>
      {console.log(data)}
      <GlobalStyle />
      <Component {...pageProps} data={data} />
      {data.map((art) => {
        return (
          <section key={art.slug}>
            <Image
              src={art.imageSource}
              alt={art.name}
              width={art.dimensions.width / 10}
              height={art.dimensions.height / 10}
            />
            <h3>Name of artwork:{art.name}</h3>
            <h3>Artist:{art.artist}</h3>
          </section>
        );
      })}
      <p>footer</p>
    </>
  );
}
