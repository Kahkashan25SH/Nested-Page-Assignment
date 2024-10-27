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

// px (pixel per inch)
// % percentage (percentage of the body)
// png, jpg, jpeg, svg, webp.
// bg-coverd 
// theme coustamization color "tailwind.config.ts" mein ja k color k object mein 
// rm -rf.next // remove, ropefully, command jub  error aye.