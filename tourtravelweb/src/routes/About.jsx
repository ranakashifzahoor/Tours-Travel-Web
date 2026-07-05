// import React from 'react'

// export default function About() {
//   return (
//     <>
//     <section className="relative w-full h-screen">

    
//       <img
//         src="https://images.unsplash.com/photo-1669535104272-1e5da3967644?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFib3V0JTIwdXMlMjBpbiUyMHRyYXZlbCUyMGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D"
//         alt="Travel"
//         className="absolute  w-full h-130 object-cover"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute  bg-black/40"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col justify-center  items-center h-full text-center px-6">

//         <h1 className="text-4xl md:text-6xl font-bold mt-[-10%] text-black ">
//           ABOUT
//         </h1>

        



//       </div>
//     </section>

    




//     </>
//   )
// }


import React from "react";

function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r  from-blue-700 to-cyan-600 text-white py-40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold cursor-pointer">
            About Rajput Travels
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto cursor-pointer">
            Your trusted travel companion for exploring the breathtaking beauty
            of Pakistan.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt="Travel"
              className="w-130  h-100  cursor-pointer hover:scale-105 transition duration-300  rounded-2xl "
            />
          </div>

          {/* Text */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>

            <p className="text-gray-700 leading-8 font-semibold text-lg">
              Rajput Travels was created with one simple mission: to help
              travelers discover the incredible beauty of Pakistan. From the
              majestic mountains of Gilgit-Baltistan to the peaceful valleys of
              Azad Kashmir, we believe every journey should become an
              unforgettable memory.
            </p>

            <p className="mt-5 text-gray-700 font-semibold leading-8 text-lg">
              Our experienced team carefully plans every trip to provide safety,
              comfort, affordability, and exceptional customer service. Whether
              you're traveling with family, friends, or as a solo explorer,
              Rajput Travels is committed to making every adventure enjoyable
              and stress-free.
            </p>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition ">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Our Mission
            </h2>

            <p className="text-gray-700 font-semibold leading-8">
              To provide safe, affordable, and memorable travel experiences
              while showcasing Pakistan's rich culture, stunning landscapes,
              and historical heritage to travelers from around the world.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition ">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Our Vision
            </h2>

            <p className="text-gray-700 font-semibold leading-8">
              To become Pakistan's most trusted travel company by delivering
              world-class customer service, innovative travel solutions, and
              unforgettable journeys for every traveler.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose Rajput Travels?
            </h2>

            <p className="mt-4 font-semibold text-gray-600">
              We make every journey comfortable, memorable, and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
              <div className="text-5xl">🚌</div>
              <h3 className="mt-4 text-xl font-bold">Comfortable Travel</h3>
              <p className="mt-2 font-semibold text-gray-600">
                Modern vehicles for a safe and enjoyable journey.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
              <div className="text-5xl">🗺️</div>
              <h3 className="mt-4 text-xl font-bold">Expert Guides</h3>
              <p className="mt-2 font-semibold text-gray-600">
                Experienced guides to make your trip unforgettable.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
              <div className="text-5xl">💰</div>
              <h3 className="mt-4 text-xl font-bold">Affordable Packages</h3>
              <p className="mt-2 font-semibold text-gray-600">
                Premium travel experiences at reasonable prices.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
              <div className="text-5xl">⭐</div>
              <h3 className="mt-4 text-xl font-bold">Customer Satisfaction</h3>
              <p className="mt-2 font-semibold text-gray-600">
                Your happiness is our highest priority.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center ">

            <div>
              <h2 className="text-5xl font-bold">500+</h2>
              <p className="mt-3">Happy Travelers</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">50+</h2>
              <p className="mt-3">Tour Packages</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">25+</h2>
              <p className="mt-3">Popular Destinations</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">5★</h2>
              <p className="mt-3">Customer Rating</p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default About;