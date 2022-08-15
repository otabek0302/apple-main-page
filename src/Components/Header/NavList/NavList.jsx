import React from 'react'
import apple from '../icons/apple.svg'
import search from '../icons/search.svg'
import bag from '../icons/bag.svg'
import './NavList.css'
function NavList() {
  return (
       <ul className='header_list'>
               <li className='header_items'>
                    <a href="https://www.apple.com/">
                         <img src={apple} alt="Apple Logo" />
                    </a>
               </li>
               <li className='header_items'>
                    <a href="https://www.apple.com/">Store</a>
               </li>
               <li className='header_items'>
                    <a href="https://www.apple.com/">Mac</a>
               </li>
               <li className='header_items'>
                    <a href="https://www.apple.com/">iPad</a>
               </li>
               <li className='header_items'>
                    <a href="https://www.apple.com/">iPhone</a>
               </li>
               <li className='header_items'>
                    <a href="https://www.apple.com/">Watch</a>
               </li>
               <li className='header_items'>
                    <a href="https://www.apple.com/">AirPods</a>
               </li>
               <li className='header_items'>
                    <a href="https://www.apple.com/">TV & Home</a>
               </li>
               <li className='header_items'>
                    <a href="https://www.apple.com/">Only on Apple</a>
               </li>
               <li className='header_items'>
                    <a href="https://www.apple.com/">Accessories</a>
               </li>
               <li className='header_items'>
                    <a href="https://www.apple.com/">Support</a>
               </li>
               <li className='header_items'>
                    <a href="https://www.apple.com/">
                         <img src={search} alt="Search" />
                    </a>
               </li>
               <li className='header_items'>
                    <a href="https://www.apple.com/">
                         <img src={bag} alt="Bag" />
                    </a>
               </li>
          </ul>
  )
}

export default NavList