import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const TitleCards = ({title, category}) => {

  const [apiData, setapiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWEwNDJmOTE1YzJmYzhiMDY2MWZmMzcwMTU3ZWI4MSIsIm5iZiI6MTczMTU3MTkwNi45MDk0MjQzLCJzdWIiOiI2NzM1YWRlMzE0M2U0MzlkYjRjNjUwZjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9w6eD9zeo7zdOUN87iEnWxP1_PYRIN9xZBhUTPlffvI'
    }
  };

useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setapiData(res.results))
    .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel)
},[])

const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card_list" ref={cardsRef}>
        {apiData.map((cards, index)=>{
          return <Link to={`/player/${cards.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/`+cards.backdrop_path} alt="card_images"/>
            <p>{cards.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
