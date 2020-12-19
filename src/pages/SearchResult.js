import React from "react";
// import getGifs from "../services/getGifs";
// import Gif from "../components/Gif";
import ListOfGifs from "../components/ListOfGifs";
import { useGifs } from "../hooks/useGifs";

export default function SearchResult({ params }) {
  const { keyword } = params;
  const { gifs } = useGifs({ keyword });
  return (
    <>
      <ListOfGifs gifs={gifs} />
    </>
  );
}
