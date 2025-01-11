import React from 'react'
import * as Images from "./assets/image"
import {useForm} from 'react-hook-form'
import { data } from 'autoprefixer';
const home = () => {
const {
  register,
  handleSubmit,
  formState:{errors},
}=useForm();
function onSubmit(data){
  console.log(data)
}
  return (
    <div className='bg-primary text-gre '>
    <div className='bg-primary  flex md:flex-row flex-col md:pt-32 pt-6 font-serif'>
               <div className='ml-26 md:mt-32 mt-12 '><div className='text-3xl    md:pl-14 pl-2  '>Welcome to CAR RENTAL Your Trusted Car Rental Partner</div><br></br><div className='text-xl md:pl-14 pl-4 flex flex-row '>Explore the Freedom of the Open Road</div><br></br></div>

        <div className='md:mt-32 mt-12'>  <img  className= "md:w-[900px] w-96"src={Images.homeimage} alt="iosj  "  /></div>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='bg-green-800 flex md:flex-row flex-col md:py-8 py-2 items-center  md:ml-20 md:mr-20 ml-4 mr-8 pr-24 rounded-md '>
<div className='bg-third rounded-md md:w-[400px] w-[320px] md:mr-8 mr-2  md:ml-6 ml-24 text-lg  md:mt-0 mt-6 '><label>pick-up location</label><br></br><select className='md:w-[400px] w-[320px]  pr-2 bg-green-700'{...register('pickuplocation',{required:true})}>
  <option value='bharatpur'className='md:w-[400px] w-[320px]'>bharatpur,chitwan</option>
  <option value='budalinkantha' className='md:w-[400px] w-[320px]'>budalinkantha,ktm</option>
  </select>
  </div>
<div className='bg-third  rounded-md md:w-[150px] w-[320px]  text-lg md:ml-0 ml-24  md:mt-0 mt-6  '><label>pick-up date</label><br></br><input  className='bg-green-700 md:w-[150px] w-[320px] text-white' type='date' {...register('pickupdate',{required:true})}></input><br></br>{errors.pickupdate && <p className=' text-red-500 bg-green-800'>pick up date is required</p>}</div>
<div className='bg-third  rounded-md md:mr-8 md:ml-2 mr-2 ml-24 text-lg md:w-[150px] w-[320px] md:mt-0 mt-6 '><label>time</label><br></br><input className='bg-green-700 md:w-[150px] w-[320px] '  type='time'{...register('pickuptime',{required:true})}></input><br></br>{errors.pickuptime && <p className=' text-red-500 bg-green-800'>pick up time is required</p>}</div>
<div className='bg-third  rounded-md text-lg md:w-[150px] w-[320px] md:ml-0 ml-24  md:mt-0 mt-6 '><label>drop-off date</label><br></br><input className='bg-green-700 md:w-[150px] w-[320px]'  type='date'{...register('dropoffdate',{required:true})}></input>{errors.dropoffdate && <p className=' text-red-500 bg-green-800'>dropoffdate is required</p>}</div>
<div className='bg-third  rounded-md md:mr-8 md:ml-2 mr-2 ml-24 text-lg md:w-[150px] w-[320px] md:mt-0 mt-6  '><label>time</label><br></br><input className='bg-green-700 md:w-[150px] w-[320px]  '  type='time'{...register('dropofftime',{required:true})}></input>{errors.dropofftime&&<p className=' text-red-500 bg-green-800'>drop off time is required</p>}</div>
<div className='bg-third  rounded-lg md:py-2 py-1 pr-4 pl-4 items-center text-lg md:mt-0 mt-8 md:ml-0 ml-12  '><button type='submit'>Search</button></div>

    </div>
    </form>
    </div>
  )
}

export default home
