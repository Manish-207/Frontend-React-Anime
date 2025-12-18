import React from 'react'
import { Link } from 'react-router-dom'

const Construction = () => {
  return (
    <div className='relative h-screen bg-cover bg-center -mt-16 md:-mt-20'>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <img className='w-35 m-4' src="https://www.pikpng.com/pngl/b/28-283541_luffy-face-png-one-piece-luffy-face-png.png" alt="chibi" />
          <h1 className="text-3xl md:text-5xl font-extrabold max-w-4xl text-gray-300">
            404 Error
          </h1>

          <p className="mt-6 text-base md:text-lg max-w-2xl text-gray-300">
            This place is under construction . Sorry for inconvineice
          </p>

          <Link to={"/home"}>
            <button className="mt-8 px-6 py-3 bg-violet-600 hover:bg-violet-700 transition rounded text-lg font-semibold">
              Back To Home
            </button>
          </Link>
        </div>
    </div>
  )
}

export default Construction