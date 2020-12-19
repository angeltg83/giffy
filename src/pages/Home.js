import React, { useState } from "react";
import ListOfGifs from "../components/ListOfGifs";
import { useGifs } from "../hooks/useGifs";
import { useLocation } from "wouter";

const Home = () => {
  const { gifs } = useGifs();

  const [keyword, setKeyword] = useState("");
  const [, pushLocation] = useLocation();
  // const {gifs} = useGifs()
  //eslint-disable-next-line
  // console.log(path);

  const handleChange = (evt) => {
    setKeyword(evt.target.value);

    console.log(keyword);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/gif/${keyword}`);
    // useLocation()
  };

  return (
    <>
    <h3 className="App-title">Giffy</h3>
    
      <form onSubmit={handleSubmit}>
        <input
          placeholder="searh a gif here ..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
      </form>

      <h4>Última busqueda</h4>
      <ListOfGifs gifs={gifs} />
    </>
  );
};

export default Home;
