import Link from "next/link";

const Contact: React.FC = () => {
    return (
      <div className="bg-indigo-700 text-white pt-10 pb-10 text-center m-20 rounded">
       <h1 className="font-bold">📲 Contact:</h1>

        <p>Phone: 0333-123456</p>
        <p>Email: Kahkashanahmed@gmail.com </p>
        <p>Address: karachi,</p>
        

        <div className="mt-8">
            <Link href="/">
            <button className="bg-violet-500 px-4 text-white 700 py-2 hover:bg-violet-900 rounded-full hover:text-white transition">Go to Home Page</button>
            </Link>
       
        </div>
      </div>
    );
  };
  
  export default Contact;