import Link from "next/link"

const About: React.FC = () => {
    return (
    <div className="bg-fuchsia-600 text-white pt-10 pb-10 text-center m-20 rounded-md">
        <h1 className="font-extrabold">👩‍💼 About Us:</h1>
      <p>
        As a web developer, I specialize in building responsive, user-friendly websites that help businesses and individuals establish their online presence. <br /> My goal is to create websites that are not only visually appealing but also functional and accessible to all users.
      </p>

       {/* Add Home Button */}

       <div className="mt-10">
          <Link href="/">
          <button className="bg-white text-fuchsia-600 px-4 py-2 rounded-full hover:bg-fuchsia-900 hover:text-white transition">
            Go to Home Page</button>
          </Link>
       </div>
    </div>
    )
  };

export default About
  

