import React from 'react'
import NavbarInfo from './NavbarInfo'
import Navbar from './Navbar'
import Footer from './Footer'
import Copywrite from './Copywrite'

const About = () => {
  return (
    <div>
      <NavbarInfo/>
      <Navbar/>
      <div className='bg-white p-9'>
      <div className='flex justify-center items-center font-[28px] text-[#515151] '> 
         <h1 className='flex text-3xl font-semibold p-5 mt-7 border-b-4 border-gradient-to-r from-blue-400 via-green-400 to-yellow-400'>About US</h1>
         
      </div>
      <div className='flex justify-center items-center '>
        <div className='text-lg leading-6 w-3/4 p-5 mt-4'>
        At our company, we strive to be the go-to destination for all your printing needs. Whether you're a household or an office, we have everything you need and more! Our top priority is providing exceptional service throughout North America. We achieve this by sourcing products directly from Original Equipment Manufacturers (OEMs) at affordable prices without any middlemen involved. Rest assured that with us, you'll always stay up-to-date on the latest industry trends and newest products available in our catalog as it continues to expand over time. So why wait? Start shopping today and enjoy a hassle-free experience like no other!

         </div>
      </div>
      
      </div>
      <Footer/>
      <Copywrite/>
      
      
    </div>
  )
}

export default About
