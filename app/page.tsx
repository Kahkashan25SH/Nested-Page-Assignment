import Link from 'next/link';
import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Footer from './component/Footer'

// Home component
function HomePage(){
  return (
    <div>
        <Navbar />
        <Hero />
        <Footer />
          
    </div>
  )
}
export default HomePage;
