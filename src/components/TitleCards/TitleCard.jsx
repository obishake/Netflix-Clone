import React, { useEffect, useRef, useState } from "react";
import "./TitleCard.css";
import { Link } from "react-router-dom";

const TitleCard = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_TMDB_AUTH_TOKEN,
    },
  };

  
  const handleWheel = (event) => {
    event.preventDefault();

    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,options)
    .then((res) => res.json())
    .then((res) => setApiData(res.results))
    .catch((err) => console.error(err));


    cardsRef.current.addEventListener("wheel", handleWheel);
    
  }, [category]);

  return (
    <div className="titleCard">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
