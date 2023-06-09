import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Discography from '../components/discography/Discography'
import News from '../components/news/News'
import Footer from '../components/footer/Footer'
import About from '../components/about/About'

import './Home.css'
import Contact from '../components/contact/Contact'
import Concerts from '../components/concerts/Concerts'
import Hero from '../components/hero/Hero'

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <News />
    <Discography />
    <About />
    <Concerts />
    <Contact />
    <Footer />
    </>
  )
}

export default Home