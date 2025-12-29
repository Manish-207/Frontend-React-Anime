import React from 'react'
import { Link } from 'react-router-dom'
import slsquad from "../assets/slsquad.png";
import InfiniteCarousel from '../components/reuse/carausel'

const Construction = () => {
  return (
    <div className='relative h-screen bg-cover bg-center -mt-16 md:-mt-20'>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <img className='w-150 m-4' src={slsquad} alt="slsquad" />
          <h1 className="text-3xl md:text-4xl font-extrabold max-w-4xl text-gray-300">
            Something Went Wrong
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-300">
            Cannot Reach the place you Want to Visit.
          </p>

          <Link to={"/home"}>
            <button className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded text-lg font-semibold">
              Back To Home
            </button>
          </Link>
        </div>
    </div>
  )
}

export default Construction