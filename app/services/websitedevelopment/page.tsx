import Link from 'next/link'
import React from 'react'

const Websitedevelopment : React.FC = () => {
  return (
    <div className="bg-lime-200 text-black pt-10 pb-10 text-center m-20 rounded"> 
        <h1 className="font-bold">💻 Web Development</h1>


          <p>Our Web Development services offer custom website solutions that are fast, responsive, and scalable.<br/> From e-commerce platforms to personal blogs, we provide modern, efficient, and secure websites that enhance your online presence and achieve your business goals.</p>

          <div className="mt-8">
              <Link href="/services">
                 <button className="bg-green-700 px-4 text-white 700 py-2 hover:bg-green-500 rounded-md hover:text-white transition">Go to Services Page</button>
              </Link>
         </div>
    </div>


  )
}

export default Websitedevelopment
