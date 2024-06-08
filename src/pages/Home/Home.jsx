import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import banner from '../../assets/hero_banner.jpg'
import title from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png'
import info from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={banner} className='banner-img' />
        <div className="hero-caption">
          <img src={title} className='caption-img' />
          <p>Discovers his ties to a secret ancient order, a young man living in modern instanbul embark on a quest to save the city from an immortal enemy</p>
          <div className="hero-btns">
            <button className='btn'><img src={play} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only On Netflix"} category={"popular"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      <TitleCards title={"Top Pics For You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
