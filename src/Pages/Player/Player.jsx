import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setapiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWEwNDJmOTE1YzJmYzhiMDY2MWZmMzcwMTU3ZWI4MSIsIm5iZiI6MTczMTU3MTkwNi45MDk0MjQzLCJzdWIiOiI2NzM1YWRlMzE0M2U0MzlkYjRjNjUwZjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9w6eD9zeo7zdOUN87iEnWxP1_PYRIN9xZBhUTPlffvI'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setapiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  
  

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt='icon' onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' src= {`https://youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player_info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
