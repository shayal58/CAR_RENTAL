import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div  className='flex text-gre bg-primary md:pl-44 pl-4 bottom-0 md:pt-0 pt-28  '>
        <div><p className='text-xl pt-6 pb-6'>CONTACT US</p><p >Nepal,chitwan,bharatpur</p>9811818835<p></p><p>shayalpiya39@gmail.com</p></div>
    <div className='pt-12 md:pl-96 pl-20'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to ="/Cars">Cars</Link></li>
            <li><Link to ="/Contacts">Contacts</Link></li>
        </ul>
        </div></div>
  )
}

export default Footer