import React from 'react'
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa'
import './LinkBtn.css'
function ReadMore ({ textBtn, linkBtn, secTextBtn, secLinkBtn }) {
  let singleLink =
              <>
                <Link
                  to={linkBtn}
                  className="read_more"
                  onMouseOver={({ target }) => target.style.textDecoration = "underline"}
                  onMouseOut={({ target }) => target.style.textDecoration = "none"}>
                  {textBtn} <FaChevronRight className='icon_next' />
                </Link>
              </>;
  let doubleLink =
              <>
                <Link
                  to={linkBtn}
                  className="read_more"
                  onMouseOver={({ target }) => target.style.textDecoration = "underline"}
                  onMouseOut={({ target }) => target.style.textDecoration = "none"}>
                  {textBtn} <FaChevronRight className='icon_next' />
                </Link>
                <Link
                  to={secLinkBtn}
                  className="read_more"
                  onMouseOver={({ target }) => target.style.textDecoration = "underline"}
                  onMouseOut={({ target }) => target.style.textDecoration = "none"}>
                  {secTextBtn} <FaChevronRight className='icon_next' />
                </Link>
              </>; 
  return (
    <div className='LinkBtns'>
      {
        !secLinkBtn ? singleLink : doubleLink
      }
    </div> 
  )
}

export default ReadMore