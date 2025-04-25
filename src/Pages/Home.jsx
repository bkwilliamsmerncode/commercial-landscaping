import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HomeContent from '../Components/Home/HomeContent'
import Footer from '../Components/Footer/Footer'
import '../Components/Statement/Statement'
import Statement from '../Components/Statement/Statement'
import ChooseUs from '../Components/Choose Us/ChooseUs'


const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeContent /> 
      <Statement />
      <ChooseUs />
      <Footer />
    </div>
  )
}

export default Home
