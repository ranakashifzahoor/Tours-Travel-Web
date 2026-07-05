import React from "react";

function Signup() {
  return (
    <section className="min-h-screen mt-15  from-blue-900 via-sky-700 to-cyan-500 relative overflow-hidden py-20 px-6">

      {/* 3D Background Circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="absolute bottom-0 -right-24 'w-[450px] h-[450px]' bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-6xl mx-auto">

        <div className="backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">

          <div className="flex  flex-col lg:flex-row">

            {/* Left Images */}
            <div className="lg:w-1/2 p-6 hidden lg:flex flex-col justify-center gap-6">

              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                alt="Travel"
                className="w-full h-64 object-cover rounded-2xl shadow-xl hover:scale-105 transition duration-500"
              />

              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                alt="Adventure"
                className="w-full h-64 object-cover rounded-2xl shadow-xl hover:scale-105 transition duration-500"
              />

            </div>

            {/* Signup Form */}
            <div className="lg:w-1/2  p-8 md:p-12 flex flex-col justify-center">

              <div className="text-center mb-8">
                <h1 className="text-5xl font-bold text-gray-900">
                   Rajput Travels
                </h1>

                <p className="text-gray-600 font-semibold mt-4">
                  Create your account and start exploring beautiful destinations.
                </p>
              </div>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4" />

                  <label className="text-gray-600 text-sm">
                    I agree to the{" "}
                    <span className="text-blue-700 font-semibold cursor-pointer hover:underline">
                      Terms & Conditions
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full 'bg-gradient-to-r' from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition duration-300"
                >
                  Create Account
                </button>

              </form>

              <div className="text-center mt-8">

                <p className="text-gray-600">
                  Already have an account?

                  <a
                    href="/login"
                    className="text-blue-700 font-bold ml-2 hover:underline"
                  >
                    Login
                  </a>

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Signup;