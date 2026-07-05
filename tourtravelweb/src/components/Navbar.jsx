import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { useState } from "react";

function Navbar() {
     const [clicked, setClicked] = useState(false);

     const handleCLick = ()=>{
        //  e.preventDefault();
         setClicked((prev)=>!prev)
     }

    return (
      <>
        <nav className="fixed top-4 left-6 right-6 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-lg rounded-xl">
          <h1 className="text-3xl font-bold text-blue-600 cursor-pointer">
            Rajput Travels
          </h1>

         <div  className="md:hidden text-3xl cursor-pointer" onClick={handleCLick}>
            <i className= {clicked ? "fas fa-times" : "fas fa-bars"} ></i>
         </div>

          <ul className={`absolute md:static left-0 top-16.5 border-none   w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none md:flex  items-center gap-8 ${
            clicked ? "flex flex-col py-4 " : "left-[-110%] hidden "
          }md:flex`}>
            {MenuItems.map((item, index) => (
              <li key={index}>
                {/* <a
                    href="/"
                    className="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600 transition duration-300"
                >
                    <i className={item.icon}></i>
                       {item.title}
                </a> */}

                <a
                  href={item.url}
                  className={`flex items-center gap-2 transition duration-300 ${
                    item.title === "Sign Up"
                      ? "bg-blue-600 text-white font-bold px-5 py-2 rounded-lg hover:bg-blue-700"
                      : "text-gray-700 font-medium hover:text-blue-600"
                  }`}
                >
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            ))}
           
          </ul>
        </nav>
      </>
    );

}


export default Navbar;
