import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

function HeroSection() {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>
        <div>
            <Image src="/banner_img.svg" width={600} height={600} alt="banner" />
        </div>
        <div className='text-center mt-4'>
            <h1 className='text-6xl md:text-7xl lg:text-9xl font-extrabold bg-gradient-to-r from-blue-600 to-red-600 text-transparent bg-clip-text'>VersusHub</h1>
            <p className='text-2xl md:text-3xl lg:4xl font-bold text-center'>
                Vote and find your best choice
            </p>
            <Button className='mt-3'>Start Free</Button>
        </div>
    </div>
  )
}

export default HeroSection
