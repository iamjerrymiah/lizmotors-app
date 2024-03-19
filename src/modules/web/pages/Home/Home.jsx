import homeVideo from 'assets/homeVideo.mp4'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Home() {
    return (
        <div className="relative flex h-screen w-screen items-center justify-center md:bg-transparent">
    
          <video
            src={homeVideo}
            loop
            autoPlay
            className="-z-10 object-cover w-full h-full"
          />
    
        <div
            className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6 text-[#fff] md:text-4xl text-2xl font-semibold"
        >Lizmotors</div>
    
        <div className="absolute mt-24 md:space-y-4 space-y-2 rounded py-2 px-2 md:mt-0 md:px-14 text-[#fff]">
            <h1 className="md:text-5xl text-3xl font-bold w-full">Take me to Lizmotors, <br />where dreams come true.</h1>
            <div className='md:text-xl text-md font-semibold'>Get best car manufacturing deals worldwide</div>
    
            <Link to='/home'>
                <button className="w-[200px] rounded bg-[#87CEEB] text-[#fff] py-3 mt-10 mb-3 font-semibold">
                    Explore
                </button>
            </Link>
          </div>

        </div>
    )
}
