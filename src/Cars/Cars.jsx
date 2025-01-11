import React from 'react'
import * as Images from '../assets/image'
import { Link } from 'react-router-dom'
const Cars = () => {
  return (
    <div className='pb-10 md:mt-32 mt-24 md:ml-24 ml-4 md:mb-24 mb-5 pr-8 text-gre bg-primary  '>
    <Link to='/Normalcar'className='flex justify-between border-2 rounded-xl  mt-10'><p className='pt-12 pl-2'>CARS</p>
    <img src={Images.suv} alt='as'  className='md:w-72 w-32 '></img>
    
    </Link>
    <Link to='/Suv' className='flex justify-between border-2 rounded-xl  mt-10'><p className='pt-12 pl-2'>SUV</p><img src={Images.suv} alt='as'  className='md:w-72 w-32 '></img></Link>
    <Link to='/Luxary' className='flex justify-between border-2 rounded-xl  mt-10'><p className='pt-12 pl-2'>LUXUARY</p><img src={Images.luxary} className='md:w-96 w-32'></img></Link>
    </div>
  )
}

export default Cars