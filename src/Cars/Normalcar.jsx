import React from 'react'
import * as Images from '../assets/image'
import * as Icons from '../assets/icons'
import { Link } from 'react-router-dom'
const Normalcar = () => {
  return (
    <div className='ml-4 mr-4 md:mb-20 text-gre'>
      <div className='flex md:mt-12 mt-8 justify-evenly'>
      <Link to ='/Normalcar/:userId'className='bg-secondary rounded-lg md:w-96 w-[120px] md:h-72 h-40'>  <button ><img src={Images.Normalcar1} width={300} height={400}></img></button><div className='flex md:flex-row flex-col  border-t-2 border-gre'><div>$100</div> <div className='md:md:ml-40 flex   '>4 seater</div></div></Link>
      <Link to='/Normalcar/:userId' className='bg-secondary rounded-lg md:w-96 w-[120px] md:h-72 h-40'>  <button ><img src={Images.Normalcar2} width={300} height={400}></img></button><div className='flex  md:flex-row flex-col border-t-2 border-gre '><div>$100</div> <div className='md:ml-40 flex '>4 seater</div></div></Link >
      <Link to='/Normalcar/:userId' className='bg-secondary rounded-lg md:w-96 w-[120px] md:h-72 h-40'>  <button ><img src={Images.Normalcar3} width={400} height={400}></img></button><div className='flex  md:flex-row flex-col mt-8 border-t-2 border-gre'><div>$100</div> <div className='md:ml-40 flex '>4 seater</div></div></Link >
      </div>
      <div className='flex mt-12 justify-evenly'>
      <Link to='/Normalcar/:userId' className='bg-secondary rounded-lg md:w-96 w-[120px] md:h-72 h-40'>  <button ><img src={Images.Normalcar1} width={300} height={400}></img></button><div className='flex  md:flex-row flex-col border-t-2 border-gre '><div>$100</div> <div className='md:ml-40 flex '>4 seater</div></div></Link >
      <Link to='/Normalcar/:userId' className='bg-secondary rounded-lg md:w-96 w-[120px] md:h-72 h-40'>  <button ><img src={Images.Normalcar2} width={300} height={400}></img></button><div className='flex  md:flex-row flex-col border-t-2 border-gre'><div>$100</div> <div className='md:ml-40 flex '>4 seater</div></div></Link >
      <Link to='/Normalcar/:userId' className='bg-secondary rounded-lg md:w-96 w-[120px] md:h-72 h-40'>  <button ><img src={Images.Normalcar3} width={400} height={400}></img></button><div className='flex md:flex-row flex-col  mt-8 border-t-2 border-gre'><div>$100</div> <div className='md:ml-40 flex '>4 seater</div></div></Link >
      </div>
      <div className='flex mt-12 justify-evenly'>
      <Link to='/Normalcar/:userId' className='bg-secondary rounded-lg md:w-96 w-[120px] md:h-72 h-40'>  <button ><img src={Images.Normalcar1} width={300} height={400}></img></button><div className='flex  md:flex-row flex-col border-t-2 border-gre '><div>$100</div> <div className='md:ml-40 flex '>4 seater</div></div></Link >
      <Link to='/Normalcar/:userId' className='bg-secondary rounded-lg md:w-96 w-[120px] md:h-72 h-40'>  <button ><img src={Images.Normalcar2} width={300} height={400}></img></button><div className='flex  md:flex-row flex-col border-t-2 border-gre'><div>$100</div> <div className='md:ml-40 flex '>4 seater</div></div></Link >
      <Link to='/Normalcar/:userId' className='bg-secondary rounded-lg md:w-96 w-[120px] md:h-72 h-40'>  <button ><img src={Images.Normalcar3} width={400} height={400}></img></button><div className='flex  md:flex-row flex-col  mt-8 border-t-2 border-gre'><div>$100</div> <div className='md:ml-40 flex '>4 seater</div></div></Link >
      </div>

      </div>
  )
}

export default Normalcar