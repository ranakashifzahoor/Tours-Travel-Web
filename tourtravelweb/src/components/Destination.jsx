import React, { useState } from "react";
import { href } from "react-router-dom";

export default function Destination() {
    

  return (
    <>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4">
          Famous Destinations
        </h1>
        <p className="mt-2 text-black text-lg md:text-xl max-w-2xl font-semibold">
          Start your journey and create memories that will last a lifetime.
        </p>
      </div>

      <div className="max-w-7xl 'mb-[-25px]' px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-10">
     
         {/* Hunza Valley */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Hunza Valley, Gilgit-Baltistan
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            <span className="font-bold">Hunza Valley</span> is one of Pakistan's
            most beautiful destinations, famous for its snow-covered mountains,
            crystal-clear lakes, and rich cultural heritage. Visitors enjoy
            breathtaking views, local hospitality, and unforgettable adventures.
          </p>

          <button onClick={()=>{
            
           window.location.href ="https://en.wikipedia.org/wiki/Hunza_Valley" 
       
          }} className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold cursor-pointer px-6 py-3 rounded-lg transition duration-300">
            Explore Now
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center gap-3 ">
          <img
            src="https://images.openai.com/static-rsc-4/sMVU9HJA_VYMvo_UHfhqYDO2Px3NtlzbNFbAC8qQQrux-4drzhdfFW2Yzgx-1SHsJQyf2h14h7fN7wgRY6442ySaqXdi5Z0MEedbVvWFoXEJuOoGQTD0E2BI4M4RYPAYP3mfv9ybkhbUhv4VIkyPGYv8BbHEaRScePWyJQVycFiMZ8edvMRuEawd5bgutsn4?purpose=fullsize"
            alt="Hunza Valley"
            className="w-50 mt-9 max-w-md h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
          />
          <img
            src="https://images.openai.com/static-rsc-4/7QFYfGav2Ic29GD_U7g4SaSlXQAl9oNmzJz3WimwUPXKyNuu_B6Kc9RkkdksvN1S2pC0Xjla_TkPLsS8I4McbTwOFx2Vj895kwx45iB7mm6sz6I-Ep4LJwv3Nqd1ti-lB6-PV1m1MkHmqEQDYqyWmMawSEmJs4x9MI8valAC9yCwQrq11KL_ZzN_dGvyrFlE?purpose=fullsize"
            alt=""
            className="w-50 max-w-md mt-16 h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      <div className="max-w-7xl 'mb-[-25px]' mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-10">
        
          

          {/* Skardu Valley */}
  <div className="md:w-1/2 flex justify-center gap-3 ">
          <img
            src="https://images.openai.com/static-rsc-4/Kc8f5gVfJeEswZiqxwcO0OBxOulkLWcp0nVeJV6_3VmZfF3zXCMXHYesljjnHdiY44qserJch1ia9D1LVkLU1pmnMxszOoceGaVLilI3ZglHKJ-Vr606aukBqx65npg-odffYC9eSOWtJLJdpdvEjQza2GxaKi26gLFNCQkM19RNzB9qYgbylCS3t_0gRVNh?purpose=fullsize"
            alt="Hunza Valley"
            className="w-50 mt-9 max-w-md h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
          />
          <img
            src="https://images.openai.com/static-rsc-4/0grgQ-K_WO5u_JYR0qKodeHrlsqa1oBQ-CAdbNoq9FsA4djCT8rGDu8aogR1dOCjcB3ju44uVZE1Ceubum9YDL0s6aoEuqOxofAQe7UhrTUzifJ-W47MiyGKMY3Gr4ZvYlbPuMtZ1oyXOOS6IcPzPaiFrnc2_lZ9r3UsIJOo8Jez8JdHzzoopuPkYz-PtjRo?purpose=fullsize"
            alt=""
            className="w-50 max-w-md  h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>          


        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Skardu Valley, Gilgit-Baltistan
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            <span className="font-bold">Skardu Valley</span> is known as the
            gateway to the world's highest mountains, including K2. It offers
            stunning lakes, deserts, valleys, and peaceful landscapes that
            attract thousands of tourists every year.
          </p>

          <button onClick={()=>{
            
           window.location.href ="https://en.wikipedia.org/wiki/Skardu_Valley" 
       
          }} className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold cursor-pointer px-6 py-3 rounded-lg transition duration-300">
            Explore Now
          </button>
        </div>
  
      </div>
      <div className="max-w-7xl 'mb-[-25px]' mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-10">
      


              {/* Fairy Meadwos */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Fairy Meadows, Gilgit-Baltistan
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            <span className="font-bold">Fairy Meadows</span> Located at the base
            of Nanga Parbat, Fairy Meadows is famous for its lush green fields,
            pine forests, and spectacular mountain views. It is one of
            Pakistan's top camping and hiking destinations.
          </p>

          <button onClick={()=>{
            
           window.location.href ="https://en.wikipedia.org/wiki/Fairy_Meadows" 
       
          }} className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold cursor-pointer px-6 py-3 rounded-lg transition duration-300">
            Explore Now
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center gap-3 ">
          <img
            src="https://images.openai.com/static-rsc-4/rta7WRz_0yeSQx5MtBDcr-2uiG4blBZtNFMX5iHbH0otqJhhM1LyvuJ6N-MMj2F4S3hj4IIrZEcHUPMP96ciKtuWsJZii03QBW9UaKF-oxNOKZB5zBqY2nbxDN5XTNcB2v9HE0T6Zo7g16L1YQASZi1gUWnQr489n_s4TyFSB35ZvnrUhdoTKh6ffkcw93k0?purpose=fullsize"
            alt="Hunza Valley"
            className="w-50 mt-9 max-w-md h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
          />
          <img
            src="https://images.openai.com/static-rsc-4/i8fpevBcp_9E1h1dXVY_AwnNiUAkV2UxOfZ-N62Ad9bZ2vna-bCxw2kvu4ezZBNcYsaxbjqTumzuKwWyhjVKLiRkpi1qIea3QO9Jp6T5nCAsEhHlgZ1AgYb5mh0GaGgxEFneMACgoLhE_TNnWSHuXGsxyPhdUNcuIqW3eEdkB3M0z9f6T80yjzsVKbEBNwXT?purpose=fullsize"
            alt=""
            className="w-50 max-w-md mt-16 h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-10">
        





                 {/* Neelam Valley */}
         <div className="md:w-1/2 flex justify-center gap-3 ">
          <img
            src="https://images.openai.com/static-rsc-4/2s0RSDWcXtv5TbfzkJ-4AHKD2GxHRMskqRkuGr3fP-cAEJL4qzPbxnctuP2H3zeNZ66e76rPzwNXotSXX8QGA8kU1_h971grxAfkmAK5jfyIWVq7nsMmFlbA7Aeb3jn-dzUd5hqmNhgeorcc76FQtdfsM6cScXxuVg1gyS5Ru2dMYak3Xq1-Mr86wq8oGRaP?purpose=fullsize"
            alt="Hunza Valley"
            className="w-50 mt-9 max-w-md h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
          />
          <img
            src="https://images.openai.com/static-rsc-4/bcxHBf9ZYS5jd8RHUIgTjesf-Vc8g6yYmMvfGjC2AsE7gzupqxrBygxdf5fIe0-Z_QmeMKOpIBIuqqO6Enjv5szVe5vxnZLF2W4DceSI5jAF1NKujW6JnkKYChli8ASajVkuTMxDPB-r17GbbUly_kiSAppHnFsPPwSGEkA3eTXFvHhcddLZPLs7qMQS-iKh?purpose=fullsize"
            alt=""
            className="w-50 max-w-md  h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
            
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Neelum Valley, Azad Kashmir
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            <span className="font-bold">Neelum Valley</span> Located in Azad
            Kashmir, Neelum Valley is famous for its crystal-clear rivers, green
            meadows, charming villages, and breathtaking mountain scenery. It is
            one of Pakistan's most peaceful tourist destinations.
          </p>

          <button onClick={()=>{
            
           window.location.href ="https://en.wikipedia.org/wiki/Neelam_Valley" 
       
          }} className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold cursor-pointer px-6 py-3 rounded-lg transition duration-300">
            Explore Now
          </button>
        </div>

        {/* Image */}
        {/* <div className="md:w-1/2 flex justify-center gap-3 ">
          <img
            src="https://images.openai.com/static-rsc-4/2s0RSDWcXtv5TbfzkJ-4AHKD2GxHRMskqRkuGr3fP-cAEJL4qzPbxnctuP2H3zeNZ66e76rPzwNXotSXX8QGA8kU1_h971grxAfkmAK5jfyIWVq7nsMmFlbA7Aeb3jn-dzUd5hqmNhgeorcc76FQtdfsM6cScXxuVg1gyS5Ru2dMYak3Xq1-Mr86wq8oGRaP?purpose=fullsize"
            alt="Hunza Valley"
            className="w-50 mt-9 max-w-md h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
          />
          <img
            src="https://images.openai.com/static-rsc-4/bcxHBf9ZYS5jd8RHUIgTjesf-Vc8g6yYmMvfGjC2AsE7gzupqxrBygxdf5fIe0-Z_QmeMKOpIBIuqqO6Enjv5szVe5vxnZLF2W4DceSI5jAF1NKujW6JnkKYChli8ASajVkuTMxDPB-r17GbbUly_kiSAppHnFsPPwSGEkA3eTXFvHhcddLZPLs7qMQS-iKh?purpose=fullsize"
            alt=""
            className="w-50 max-w-md  h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
          />
        </div> */}
      </div>
    </>
  );
}
