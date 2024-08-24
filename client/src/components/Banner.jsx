import React from 'react'
import food from '/food.jpg'

const Banner = () => {
  return (
    <div className='section-container '>
      <div className='py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
        {/*image*/}
        <div className='md:w-1/2'>
        <img src ={food} alt="Delicious food" className='rounded-lg'/>
        </div>

        {/*text*/}
        <div className='md:w-1/2 space-y-7 px-4'>
            <h2 className='md:text-5xl font-bold text:4xl md:leading-snug leading-snug '>Savory Bites: Where Every <span className='text-green'>Flavor Tells a Story</span></h2>
            <p className='text-xl text-[#4A4A4A]'>Savor the Flavor in Every Bite!</p>
            <button className='bg-green px-8 py-3 font-semibold text-white rounded-full'>Oder Now</button>
        </div>

        
      </div>
    </div>
  )
}

export default Banner