import React, { useState } from 'react'
import  './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

 const Navbar = () => 
{
  const [menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
       <div className='nav_logo'>
        <img src= {logo} alt ="logo" />
        <p>SHOP</p>
       </div>

       <ul className='nav_menu'>
         <li onClick={()=>{setMenu("shop")}} >Shop{menu==="shop"?<hr/>:<></>} </li>
         <li onClick={()=>{setMenu("mens")}} >Men {menu==="mens"?<hr/>:<></>} </li>
         <li onClick={()=>{setMenu("womens")}} >Women {menu==="womens"?<hr/>:<></>} </li>
         <li onClick={()=>{setMenu("kids")}} >Kids {menu==="kids"?<hr/>:<></>} </li>
       </ul>

       <div className='cart'>
         <button>Login </button>
         <img src = {cart_icon} alt ="cart" />
       </div>


    </div>
  )
}
export default Navbar;
