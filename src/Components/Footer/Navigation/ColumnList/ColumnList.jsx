import React from 'react'
import './ColumnList.css'
import LinkItem from './LinkItem'

function ColumnList ({ items }) {
  return (
     <ul className='column_list'>     
          {
               items.map((item, index) => (
                    <LinkItem  key={index} itemLink={item.link} itemTitle={item.title} />
               ))       
          }  
    </ul>
  )
}

export default ColumnList