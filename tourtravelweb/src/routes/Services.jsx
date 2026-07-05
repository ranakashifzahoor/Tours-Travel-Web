

import React from 'react'
import Card from '../components/Card'

export default function Services() {
  return (
    <>
      <section className="bg-gradient-to-r  from-blue-700 to-cyan-600 text-white py-40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold cursor-pointer">
             Rajput Travels Services
          </h1>

          <p className="mt-6 text-lg md:text-xl font-semibold max-w-3xl mx-auto cursor-pointer">
          Your Trust is our service
          </p>
        </div>
      </section>
        <div className='mb-8'>
    <Card />
    </div>
    </>
  )
}
