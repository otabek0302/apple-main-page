import React from 'react'
import { Link } from 'react-router-dom'

function LinkItem({ itemLink, itemTitle }) {
     return (
     <li className='column_item'>
            <Link to={itemLink}>{ itemTitle }</Link>
     </li>
     )
}

export default LinkItem