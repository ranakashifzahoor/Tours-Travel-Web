import React from "react";
export default function Card() {
  return (
    <>
     
       <div className="relative mb-15 z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-black mt-4">
          Recent Trips
        </h1>
        <p className="mt-2  text-black text-lg md:text-xl max-w-2xl font-semibold">
         You can explore more trips from google map.
        </p>
      </div>
      <section className="flex flex-col lg:flex-row justify-center items-center gap-5 px-4">
        <div className="w-full  hover:shadow-2xl transition lg:w-95 ml-0 lg:ml-8 bg-white border h-auto border-blue-700 rounded-lg shadow">
          <a href="/">
            <img
              className="p-5 h-66 w-150 hover:scale-105 transition duration-500 object-cover rounded-3xl"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Nanga_Parbat_The_Killer_Mountain.jpg/960px-Nanga_Parbat_The_Killer_Mountain.jpg"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="/">
              <h1 className="text-xl mb-1 font-bold tracking-tight text-gray-900 dark:text-white">
                Fairy Meadows
              </h1>
              <p className="font-semibold text-gray-600">
                While Fairy Meadows is famous for its views of Nanga Parbat, the
                point commonly mistaken for the summit from this vantage point
                is actually the North Peak (7,816 m). The true summit (8,126 m)
                remains hidden behind the North Peak's massif and the Silver
                Saddle.
              </p>
            </a>
          </div>
        </div>

        <div className="w-full  hover:shadow-2xl transition lg:w-95 ml-0 lg:ml-8 bg-white border h-auto border-blue-700 rounded-lg shadow">
          <a href="/">
            <img
              className="p-5 h-66 w-150 hover:scale-105 transition duration-500 object-cover rounded-3xl"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Hunza_Valley_HDR.jpg/960px-Hunza_Valley_HDR.jpg"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="/">
              <h1 className="text-xl mb-1 font-bold tracking-tight text-gray-900 dark:text-white">
                Hunza Valley
              </h1>
              <p className="font-semibold text-gray-600">
               The valley floor sits at an elevation of 2,438 meters (7,999 feet). Geographically, the Hunza Valley is divided into three parts: Upper Hunza (Gojal), Central Hunza, and Lower Hunza (Shinaki). The topography of the valley is characterized by steep valleys, rugged peaks, glaciers and active tectonic fault zones. The Karakoram mountain range envelopes the entire region.
              </p>
            </a>
          </div>
        </div>

        <div className="w-full  hover:shadow-2xl transition lg:w-95 ml-0 lg:ml-8 bg-white border h-auto border-blue-700 rounded-lg shadow">
          <a href="/">
            <img
              className="p-5 h-66 w-150  hover:scale-105 transition duration-500 object-cover rounded-3xl"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Nanga_Parbat_The_Killer_Mountain.jpg/960px-Nanga_Parbat_The_Killer_Mountain.jpg"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="/">
              <h1 className="text-xl mb-1 font-bold tracking-tight text-gray-900 dark:text-white">
                Neelum Valley
              </h1>
              <p className="font-semibold text-gray-600">
               Neelum Valley is a spectacular, 240-kilometer bow-shaped valley in Azad Jammu and Kashmir. Famous for the rushing Neelum River, dense alpine forests, and breathtaking glacier-fed lakes, it stretches from just north of Muzaffarabad to the remote village of Taobat. It serves as a prime destination for adventure and nature tourism
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
