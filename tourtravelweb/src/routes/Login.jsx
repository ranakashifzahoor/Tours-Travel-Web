import React from "react";

function Login() {
  return (
    <section className="min-h-screen mt-15 bg-gradient-to-br from-blue-900 via-sky-700 to-cyan-500 relative overflow-hidden py-20 px-6">

      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-6xl mx-auto">

        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">

          <div className="flex flex-col lg:flex-row">

            {/* Left Side Images */}
            <div className="hidden lg:flex lg:w-1/2 bg-gray-100 p-6 flex-col gap-6 justify-center">

              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
                alt="Travel"
                className="w-full h-60 object-cover rounded-2xl shadow-xl hover:scale-105 transition duration-500"
              />

              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                alt="Mountains"
                className="w-full h-60 object-cover rounded-2xl shadow-xl hover:scale-105 transition duration-500"
              />

            </div>

            {/* Login Form */}
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">

              <div className="text-center">

                <h1 className="text-5xl font-bold text-gray-900">
                  Welcome Back
                </h1>

                <p className="mt-4 text-gray-600 font-semibold">
                  Login to continue your journey with Rajput Travels.
                </p>

              </div>

              <form className="mt-10 space-y-5">

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex justify-between items-center text-sm">

                  <label className="flex items-center gap-2 text-gray-600">
                    <input type="checkbox" />
                    Remember Me
                  </label>

                  <a
                    href="/forgot-password"
                    className="text-blue-700 hover:underline"
                  >
                    Forgot Password?
                  </a>

                </div>

                <button
                  type="submit"
                  className="w-full py-3 font-bold rounded-xl text-white text-2xl text-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition duration-300 shadow-lg hover:shadow-2xl"
                >
                  Login
                </button>

              </form>

              <div className="text-center mt-8">

                <p className="text-gray-600">
                  Don't have an account?

                  <a
                    href="/signup"
                    className="ml-2 text-blue-700 font-bold hover:underline"
                  >
                    Create Account
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

export default Login;