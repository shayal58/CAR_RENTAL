import React from 'react'
import * as Images from '../assets/image'
import { useForm } from 'react-hook-form'
const Normaldetail = () => {
    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm();
    function onSubmit(data){
console.log(data)
    }
  return (
    <div className='text-gre'>
        <div className='text-bold text-4xl md:pl-96 pt-24' >CAR MODEL</div>
        <div className='flex md:flex-row flex-col justify-around md:mt-24 mt-12'>
        <div><img src={Images.Normalcar1} width={500} height={500}className='md:w-[500px] w-64 '></img></div>
            <div>
        <br></br><div className='text-bold md:text-2xl md:mt-12  md:ml-24 ml-4 text-sm underline'>VEHICAL FEATURE</div>
        <ul className='text-bold md:mt-5 mt-1 mb-12 md:ml-24 ml-4 text-xl  '>
  <li>* Air Conditioning</li>
  <li>* Power Steering</li>
  <li>* Bluetooth Connectivity</li>
  <li>* Reverse Parking Camera</li>
  <li>* Adaptive Cruise Control</li>
  <li>* Anti-lock Braking System (ABS)</li>
  <li>* Keyless Entry</li>
  <li>* Touchscreen Infotainment System</li>
  <li>* Sunroof</li>
  <li>* Heated Seats</li>
</ul>
</div>

</div>
<form onSubmit={handleSubmit(onSubmit)}>
    <div className='bg-green-800 flex md:flex-row flex-col md:py-8 py-2 items-center  md:ml-20 md:mr-20 ml-4 mr-8 pr-24 rounded-md '>
<div className='bg-third rounded-md md:w-[400px] w-[320px] md:mr-8 mr-2  md:ml-6 ml-24 text-lg  md:mt-0 mt-6 '><label>pick-up location</label><br></br><select className='md:w-[400px] w-[320px]  pr-2 bg-green-700'{...register('pickuplocation',{required:true})}>
  <option value='bharatpur'>bharatpur,chitwan</option>
  <option value='budalinkantha'>budalinkantha,ktm</option>
  </select>
  </div>
<div className='bg-third  rounded-md md:w-[150px] w-[320px]  text-lg md:ml-0 ml-24  md:mt-0 mt-6  '><label>pick-up date</label><br></br><input  className='bg-green-700 md:w-[150px] w-[320px]' type='date' {...register('pickupdate',{required:true})}></input><br></br>{errors.pickupdate && <p className=' text-red-500 bg-green-800'>pick up date is required</p>}</div>
<div className='bg-third  rounded-md md:mr-8 md:ml-2 mr-2 ml-24 text-lg md:w-[150px] w-[320px] md:mt-0 mt-6 '><label>time</label><br></br><input className='bg-green-700 md:w-[150px] w-[320px] '  type='time'{...register('pickuptime',{required:true})}></input><br></br>{errors.pickuptime && <p className=' text-red-500 bg-green-800'>pick up time is required</p>}</div>
<div className='bg-third  rounded-md text-lg md:w-[150px] w-[320px] md:ml-0 ml-24  md:mt-0 mt-6 '><label>drop-off date</label><br></br><input className='bg-green-700 md:w-[150px] w-[320px]'  type='date'{...register('dropoffdate',{required:true})}></input>{errors.dropoffdate && <p className=' text-red-500 bg-green-800'>dropoffdate is required</p>}</div>
<div className='bg-third  rounded-md md:mr-8 md:ml-2 mr-2 ml-24 text-lg md:w-[150px] w-[320px] md:mt-0 mt-6  '><label>time</label><br></br><input className='bg-green-700 md:w-[150px] w-[320px]  '  type='time'{...register('dropofftime',{required:true})}></input>{errors.dropofftime&&<p className=' text-red-500 bg-green-800'>drop off time is required</p>}</div>
<div className='bg-third  rounded-lg md:py-2 py-1 pr-4 pl-4 items-center text-lg md:mt-0 mt-8 md:ml-0 ml-12  '><button type='submit'>Search</button></div>

    </div>
    </form>
    </div>
  )
}

export default Normaldetail