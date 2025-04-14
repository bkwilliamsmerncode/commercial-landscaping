import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HomeContent from '../Components/Home/HomeContent'
import Footer from '../Components/Footer/Footer'
import '../Components/Statement/Statement'
import Statement from '../Components/Statement/Statement'


const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeContent /> 
      <Statement />
      <Footer />
    </div>
  )
}

export default Home
