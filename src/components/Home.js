import React from 'react'
import Products from './Products'
import HeroSlider from './HeroSlider'
import Footer from './Footer'
import Header from './Header'

function Home() {
  return (
    <div>
      <Header/>
      <HeroSlider/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Home