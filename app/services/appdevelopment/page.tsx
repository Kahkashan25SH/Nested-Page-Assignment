import Link from 'next/link'
import React from 'react'

const Appdevelopment : React.FC = () => {
  return (
    <div className="bg-indigo-300 text-black pt-10 pb-10 text-center m-20 rounded">
      <h1 className="font-bold">💻 App Development</h1>

      <p>Our App Development services focus on creating user-friendly and innovative mobile applications tailored to your business needs. <br/> We specialize in both iOS and Android platforms, delivering high-quality apps that provide seamless experiences and engage your audience effectively.</p>

      <div className="mt-8">
          <Link href="/services">
            <button className="bg-blue-700 px-4 text-white 700 py-2 hover:bg-blue-500 rounded-md hover:text-white transition">Go to Services Page</button>
          </Link>
       
      </div>
    </div>


  )
}

export default Appdevelopment
