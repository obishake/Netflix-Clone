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
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGFhNmIyMDliNGYxY2Q1YmZmOGE3MTIzMzI1MGM5OCIsIm5iZiI6MTc1MzA3MjcyNi4yMDg5OTk5LCJzdWIiOiI2ODdkYzQ1NjZjMGRmM2RhOWIxNmExNzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rOha-3WOtwNZunLJaZJknT38djIPmF2ZivpLTol0Bjw",
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
