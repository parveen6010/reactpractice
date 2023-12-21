import React  , {useEffect}from 'react'
import {Link , useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();
    const auth = localStorage.getItem("users");

 
     const logout = () => {
      localStorage.removeItem("users");
      navigate("/signup");
     }
   
  return (
    <div>
       <ul className='nav-bar'>
        <li> <Link to = "/" >home</Link></li>
        <li> <Link to = "/addproduct" >add product</Link></li>
        <li> <Link to = "/updateproduct" >update product</Link></li>
        <li> <Link to = "/profile" >Profile</Link></li>
        <li> <Link to = "/login" >Login</Link></li> 
  {  auth ? <li><Link to = "/signup" onClick={logout} >Logout</Link></li> : <li> <Link to = "/signup" >Signup</Link></li> }    
   </ul>

    </div>
  )
}

export default Navigation