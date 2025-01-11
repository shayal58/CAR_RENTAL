import React from 'react'
import * as Images from '../assets/image'
import {Link} from 'react-router-dom'
const Luxary = () => {
  return (
     <div className='ml-4 mr-4 mb-20 text-gre'>
       <div className='flex mt-12 justify-evenly'>
       <Link to ='/Luxary/:userId'className='bg-secondary rounded-lg w-96 h-76'>  <button ><img src={Images.Normalcar1} width={300} height={400}></img></button><div className='flex  border-t-2 border-gre'><div>$100</div> <div className='ml-40 flex '>4 seater</div></div></Link>
       <Link to='/Luxary/:userId' className='bg-secondary rounded-lg w-96 h-76'>  <button ><img src={Images.Normalcar2} width={300} height={400}></img></button><div className='flex border-t-2 border-gre '><div>$100</div> <div className='ml-40'>4 seater</div></div></Link >
       <Link to='/Luxary/:userId' className='bg-secondary rounded-lg w-96 h-76'>  <button ><img src={Images.Normalcar3} width={400} height={400}></img></button><div className='flex mt-10 border-t-2 border-gre'><div>$100</div> <div className='ml-40'>4 seater</div></div></Link >
       </div>
       <div className='flex mt-12 justify-evenly'>
       <Link to='/Luxary/:userId' className='bg-secondary rounded-lg w-96 h-76'>  <button ><img src={Images.Normalcar1} width={300} height={400}></img></button><div className='flex border-t-2 border-gre '><div>$100</div> <div className='ml-40'>4 seater</div></div></Link >
       <Link to='/Luxary/:userId' className='bg-secondary rounded-lg w-96 h-76'>  <button ><img src={Images.Normalcar2} width={300} height={400}></img></button><div className='flex border-t-2 border-gre'><div>$100</div> <div className='ml-40'>4 seater</div></div></Link >
       <Link to='/Luxary/:userId' className='bg-secondary rounded-lg w-96 h-76'>  <button ><img src={Images.Normalcar3} width={400} height={400}></img></button><div className='flex mt-10 border-t-2 border-gre'><div>$100</div> <div className='ml-40'>4 seater</div></div></Link >
       </div>
       <div className='flex mt-12 justify-evenly'>
       <Link to='/Luxary/:userId' className='bg-secondary rounded-lg w-96 h-76'>  <button ><img src={Images.Normalcar1} width={300} height={400}></img></button><div className='flex border-t-2 border-gre '><div>$100</div> <div className='ml-40'>4 seater</div></div></Link >
       <Link to='/Luxary/:userId' className='bg-secondary rounded-lg w-96 h-76'>  <button ><img src={Images.Normalcar2} width={300} height={400}></img></button><div className='flex  border-t-2 border-gre'><div>$100</div> <div className='ml-40'>4 seater</div></div></Link >
       <Link to='/Luxary/:userId' className='bg-secondary rounded-lg w-96 h-76'>  <button ><img src={Images.Normalcar3} width={400} height={400}></img></button><div className='flex  mt-10 border-t-2 border-gre'><div>$100</div> <div className='ml-40'>4 seater</div></div></Link >
       </div>
 
       </div>
  )
}

export default Luxary