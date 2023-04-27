import GlobalStyle from "../styles";
import useSWR from "swr";
import React from "react";
import { useState } from "react";
import Heading from "../components/Heading/index.js";
import Nav from "../components/nav";
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
      {console.log(data)}
      <GlobalStyle />
      <Heading />
      <Nav data={data} />
      <Component {...pageProps} data={data} />

      <Footer />
    </>
  );
}
