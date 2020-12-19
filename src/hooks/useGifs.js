import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export const useGifs = ({ keyword } = { keyword: null }) => {
  const [gifs, setGifs] = useState([]);

  // console.log(keywordToUse)
  useEffect(() => {
    const keywordToUse =
      keyword || localStorage.getItem("lastKeyword") || "random";
    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      localStorage.setItem("lastKeyword", keyword);
      // console.log("user eff ", gifs);
    });
    // console.log("ejecutado...")
  }, [keyword]);

  return { gifs };
};
