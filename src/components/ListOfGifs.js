import React from "react";
// import getGifs from "../services/getGifs";
import Gif from "./Gif";
import "./ListOfGifs.css";

export default function ListOfGifs({ gifs }) {
  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} id={id} url={url} />
      ))}
    </div>
  );
}
