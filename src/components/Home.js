import React from 'react'
import '../styles/Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
  return (
    <div className='home'>
      <Banner />

      <div className='home-section'>
        <Card />
      </div>
    </div>
  )
}

export default Home
