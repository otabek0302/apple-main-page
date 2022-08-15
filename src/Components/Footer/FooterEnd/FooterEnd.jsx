import React from 'react'
import './FooterEnd.css'
function FooterEnd() {
  return (
       <div className='FooterEnd'>
          <div className="FooterEnd_top">
          <p>More ways to shop: <a href="https://www.apple.com/retail/">Find an Apple Store </a> or <a href="https://locate.apple.com/">other retailer </a> near you. Or call 1-800-MY-APPLE.</p>
          </div>
          <div className="FooterEnd_bottom">      
                 <ul className='end_list'>
                      <li className='end_list_item'>
                           Copyright © 2022 Apple Inc. All rights reserved.
                      </li>
                      <li className='end_list_item'>
                           Privacy Policy   
                      </li>
                      <li className='end_list_item'>
                           Terms of Use
                      </li>
                      <li className='end_list_item'>
                           Sales and Refunds
                      </li>
                      <li className='end_list_item'>
                           Legal Site Map
                      </li>
                 </ul>       
            </div>
    </div>
  )
}

export default FooterEnd