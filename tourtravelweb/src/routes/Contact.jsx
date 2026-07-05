import React from 'react'

export default function Contact() {
  return (
    <>
    <section className="bg-gradient-to-r  from-blue-700 to-cyan-600 text-white py-40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold cursor-pointer">
           Feel Free To Ask
          </h1>
          <p className="mt-6 text-lg md:text-xl font-semibold max-w-3xl mx-auto cursor-pointer">
             You tour our responibility
          </p>
        </div>
      </section>
       <div className="relative mb- z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4">
          Let's Contact With Rajput Travel
        </h1>
        <p className="mt-4  text-black text-lg md:text-xl max-w-2xl font-semibold">
              Have questions about our tour packages? We'd love to hear from
              you. Fill out the form below and our team will get back to you
              shortly.
        </p>
      </div>

 <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">

        <div className="flex flex-col lg:flex-row">

<div className="lg:w-1/2 flex flex-col justify-center gap-6 p-6">

  <img
    src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
    alt="Travel Mountains"
    className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
  />

  <img
    src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg"
    alt="Travel Adventure"
    className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
  />

</div>
          {/* Contact Form */}
          <div className="lg:w-1/2 p-8 md:p-12">

            <h1 className="text-4xl font-bold text-gray-700">
              Contact Rajput Travels
            </h1>

           

            <form className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Destination"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>

      </>
  )
}
