import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
      <div className='flex bg-pink-300 justify-evenly p-5'>
        <div className='text-xl font-medium'>Kahkashan</div>
           <ul className='lg:gap-20 md:flex'>
              <li className='menulink'><Link href='/'>Home</Link></li> {/* Use `/` for Home */}
              <li className='menulink'><Link href='/about'>About</Link></li>
              <li className='menulink'><Link href='/services'>Services</Link></li>
              <li className='menulink'><Link href='/contact'>Contact</Link></li>
          
           </ul>
      </div>


  )
}

export default Navbar