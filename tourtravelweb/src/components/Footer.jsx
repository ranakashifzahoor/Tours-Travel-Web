function Footer() {
  return (
    <footer className="bg-gray-900 absolute text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-3 py-8 ">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-2xl ml-1 font-bold text-white">
              Rajput Travels
            </h2>

            <p className="mt-4 ml-1 font-semibold text-gray-400 leading-7">
              Explore the beauty of Pakistan with Rajput Travels.
              We provide memorable travel experiences, affordable
              tour packages, and professional travel guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-white">
              Quick Links
            </h2>

            <ul className="mt-4 space-y-3">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400">About</a></li>
              <li><a href="/service" className="hover:text-blue-400">Services</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h2 className="text-xl font-semibold text-white">
              Destinations
            </h2>

            <ul className="mt-4 space-y-3 ">
              <li>Hunza Valley</li>
              <li>Skardu</li>
              <li>Swat Valley</li>
              <li>Fairy Meadows</li>
              <li>Neelum Valley</li>
            </ul>
          </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-2xl">
              <a href="#" className="hover:text-blue-500">
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a href="#" className="hover:text-pink-500">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#" className="hover:text-sky-400">
                <i className="fa-brands fa-twitter"></i>
              </a>

              <a href="#" className="hover:text-red-500">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
             {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-2 text-center text-gray-400">
          © {new Date().getFullYear()} Rajput Travels. All Rights Reserved.
        </div>
        </div>
    </footer>
  );
}

export default Footer;