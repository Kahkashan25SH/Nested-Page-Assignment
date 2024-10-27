import React from "react";
import Link from "next/link";

const Services: React.FC = () => {
      return (
        <div className="bg-rose-600 text-white pt-10 pb-10 text-center m-20 rounded-lg">
          <h1 className="font-extrabold">👨‍🔧 Services:</h1>

           <p className="text-xl">We specialize in creating engaging, user-friendly websites.</p>
               We offer a range of web development services, including:

             <ul>
               <li>Custom website design and development</li>
               <li>SEO optimization</li>
               <li>E-commerce solutions</li>
               <li>Ongoing website maintenance and support</li>
             </ul>
            
        
        <div className="mt-5">
              <Link href="/">
              <button className="bg-rose-300 px-5 text-black hover:bg-rose-800 py-2 hover:text-white transition rounded-full">Go to Home Page</button>
              </Link>
        </div>
        
          
        <div className="bg-pink-200 text-black pt-5 pb-5 text-center m-10 rounded-lg">
            <ul>
               <li className='menulink'><Link href='/services/websitedevelopment'>👨‍💻 Website-Development</Link></li> 
               <li className='menulink'><Link href='/services/appdevelopment'> App-Development 👨‍💻</Link></li>     
            </ul>
          
        </div>
        </div>
      );
    }
   


   export default Services; 