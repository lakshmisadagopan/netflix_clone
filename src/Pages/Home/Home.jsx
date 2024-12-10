import React from 'react'
import './Home.css'
import NavBar from '../../Components/NavBar/NavBar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_btn from '../../assets/play_icon.png'
import info_btn from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <NavBar/>
      <div className="hero">
        <img src={hero_banner} alt="Banner Image" className='banner_img'/>
        <div className="hero_caption">
          <img src={hero_title} alt="Caption Image" className='caption_img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero_buttons">
            <button className='btn'><img src={play_btn} alt="Play Button"/>Play</button>
            <button className='btn dark_btn'><img src={info_btn} alt="Info Button"/>More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more_cards">
      <TitleCards title = {"Blockbuster Movies"} category = {"top_rated"}/>
      <TitleCards title = {"Only on Netflix"} category = {"popular"}/>
      <TitleCards title = {"Upcoming"} category = {"upcoming"}/>
      <TitleCards title = {"Top Pics for You"} category = {"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
