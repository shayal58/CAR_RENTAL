import React from 'react'
import { useForm } from 'react-hook-form'
import * as Images from "./assets/icons"
const Contacts = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState:{errors},
  } =useForm();
  function onSubmit(data){
    console.log('submiting data',data)
  }
  return (
    <div className='font-sans text-gre md:pb-12 '>
      
     <div className='flex '>
      <div className='bg-secondary w-1/2  h-[600px] rounded-lg text-gre md:pl-12 pl-1 md:pt-8 pt-2 hidden md:block '>
      <p className='text-bold md:text-3xl text-xl'>Contact information</p>
      <p>this is where you can contact us</p>
      <div className='flex md:pt-24 pt-8'><img src={Images.Phone} className='md:pr-12 pr-2 h-10 md:w-20 w-7'></img>
 <p className='pt-4 md:'>9811818835</p></div>
     <div className='flex pt-4'><img src={Images.Email} className='md:pr-12 h-10  md:w-20 w-7'></img><p className='pt-4 md:text-lg text-[13px]'>shayalpiya39@gmail.com</p></div> 
      <div className='flex pt-4'><img src={Images.Adress} className='md:pr-12 h-10 md:w-20 w-7'></img><p className='pt-4 md:text-lg text-[13px]'>Nepal,chitwan,bharatpur</p></div></div>
      <div className='md:pr-12'>
      <p className='md:text-4xl text-2xl font-extrabold md:text-center ml-32 font-sans pt-12 '>Contact Us</p>
      <p className='md:text-center ml-16 font-sans font-semibold md:text-xs text-[12px] mb-12'>Any question or remarks? Just write us a message!</p>
      <form className='md:ml-32 ml-2' onSubmit={handleSubmit(onSubmit)}>          <div className='flex'>
        
          <div>
          <label>First Name</label><br></br>
          <input className='border-b-2 md:px-12'{...register('firstName',{required:true,minLength:{value:3,message:'minimum length must be 3'},maxLength:{value:20, message:"max length atmost 20"}})}></input>
          {errors.firstName && <p className='text-red-700'>{errors.firstName.message}</p>}
          </div>
          <div className='md:ml-32 ml-4'>
          <label>last Name</label><br></br>
          <input className='border-b-2 md:px-12 px-2'{...register('lastName',{required:true,minLength:{value:3,message:'mini length must be 3'},maxLength:{value:20,message:'max length atmost 20'}})}></input>
          {errors.lastName && <p className='text-red-700'>{errors.lastName.message}</p>}
          </div>
          </div>
          <div className='flex mt-12'>
          <div>
          <label>Email</label><br></br>
          <input className='border-b-2 md:px-12
          '{...register('email',{required:true})}></input>
          {errors.email&&<p className='text-red-700'>Email required</p>}
          </div>
          <div className='md:ml-32 ml-4'>
          <label>phone</label><br></br>
          <input type='number' className='border-b-2 md:px-12'{...register('phone',{required:true,minLength:{value:10,message:'minimum length must be 10'},maxLength:{value:10,message:'max length must be atmost 10'}})}></input>
          {errors.phone && <p className='text-red-700'>{errors.phone.message}</p>}
          </div>
          </div>
          <div className='mt-12'>
            <label>Message</label><br></br>
            <input className='border-b-2 md:w-[700px] w-96' {...register('message',{required:true})}></input><br></br>
            <button type='submit' className='bg-third text-white rounded-sm md:mt-12 mt-6 md:ml-64 ml-40 mb-4 py-2 px-2'>submit</button>
          </div>
        </form>
      </div>
     </div>
<iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d56521.827373665066!2d84.38220903270557!3d27.69831620377271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d27.698322299999997!2d84.42340879999999!4m3!3m2!1d27.722327999999997!2d84.3705361!5e0!3m2!1sen!2snp!4v1735461036063!5m2!1sen!2snp" className='w-screen' height="350"  allowfullscreen="" loading="lazy" ></iframe>  
  </div>
  )
}

export default Contacts