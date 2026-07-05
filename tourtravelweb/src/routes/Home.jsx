import React from "react";
import { Link } from "react-router-dom";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Services from "./Services";
import Card from "../components/Card";

function Home() {
  return (
    <>
    <section className="relative w-full h-screen">
    
      <img
        src="https://images.unsplash.com/photo-1611530624100-5fc87c9d5baa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbGluZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
        alt="Travel"
        className="absolute   inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center  items-center h-full text-center px-6">

        <h1 className="text-4xl md:text-6xl font-bold text-white mt-10">
          Explore Pakistan
        </h1>

        <p className="mt-4 text-white text-lg md:text-2xl max-w-2xl font-semibold">
          Discover the most beautiful destinations, mountains, valleys, and
          adventures with Rajput Travels.
        </p>

        <Link
          href="/"
          className="mt-8 px-8 py-3 font-bold text-2xl bg-orange-600 hover:bg-orange-700 text-white rounded-lg  transition duration-300"
        >
          Travel Plan
        </Link>

      </div>
    </section>
    <Destination/>
    <Card/>
    <Footer/>

    </>
  );
}

export default Home;