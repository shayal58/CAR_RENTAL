import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
  
    <nav className="">
  <ul className="flex md:flex-row flex-col justify-evenly bg-primary text-gre text-xl border-b-2 border-white py-3">
<li><Link to ='/'>Home</Link></li>
<li><Link to ='/Cars'>Cars</Link></li>
<li><Link to ='/Contacts'>Contacts</Link></li>
  </ul>
  

</nav>

  )
}

export default Navbar