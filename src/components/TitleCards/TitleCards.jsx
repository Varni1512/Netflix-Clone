import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDcyY2U5Y2ZlNDkzNDNkNzVmNDBkNGE3N2NjNmExNyIsIm5iZiI6MTczNTIwMTQ4My4zMDQ5OTk4LCJzdWIiOiI2NzZkMTJjYjNkZmYwZGU5OWI2MTNlMTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.afIQ0XxqyJDpqjUN4zfeCg_VvbfcaoDnlIIgHtHWL4w'
    }
  };

  const handlewheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setApiData(data.results))
      .catch((err) => {
        console.error('API fetch error:', err);
        setApiData([]);
      });

    const currentCardsRef = cardsRef.current;
    if (currentCardsRef) {
      currentCardsRef.addEventListener('wheel', handlewheel);
    }

    return () => {
      if (currentCardsRef) {
        currentCardsRef.removeEventListener('wheel', handlewheel);
      }
    };
  }, []);

  return (
    <div className="title-cards">
      <h2>{title || 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img
              src={card.backdrop_path ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}` : 'fallback-image-url.jpg'}
              alt={card.original_title || 'Movie poster'}
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
