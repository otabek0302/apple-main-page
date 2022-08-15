import * as React from 'react';
import LinkBtn from './LinkBtn/LinkBtn'
import './Container.css';
function Container ({ img, textBtn, linkBtn, title, subtitle, secTextBtn, secLinkBtn, bgBlack, clReserve }) {
     return (
          <div className='container'>
               <div className={`wrapper ${bgBlack} ${clReserve}`}>
                    <div className={`wrapper_text ${bgBlack}`} >
                         <h2 className='headline'>{ title }</h2>
                         <h3 className='subhead'>{subtitle}</h3>
                         <LinkBtn
                              textBtn={textBtn}
                              linkBtn={linkBtn}
                              secTextBtn={secTextBtn}
                              secLinkBtn={secLinkBtn}     
                         />
                    </div>
                    <div className="wrapper_body">
                         <div className='figure_bg' style={{
                              background: `url(${img})`
                         }}>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Container