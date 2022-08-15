import React from 'react'
import './Navigation.css'
import ColumnList from './ColumnList/ColumnList'

let Nav = {
     column_one: [
     {
          title: 'Shop and Learn',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Store',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'iPad',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'iPhone',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Watch',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'AirPods',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'TV & Home',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'AirTag',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Accessories',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Gift Cards',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     }
     ],
     column_two: [
     {
          title: 'Shop and Learn',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Store',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'iPad',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'iPhone',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Watch',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'AirPods',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'TV & Home',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'AirTag',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Accessories',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Gift Cards',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     }
     ],
     column_three: [
     {
          title: 'Shop and Learn',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Store',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'iPad',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'iPhone',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Watch',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'AirPods',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'TV & Home',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'AirTag',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Accessories',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Gift Cards',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     }
     ],
     column_four: [
     {
          title: 'Shop and Learn',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Store',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'iPad',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'iPhone',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Watch',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'AirPods',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'TV & Home',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'AirTag',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Accessories',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Gift Cards',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     }
     ],
     column_five: [
     {
          title: 'Shop and Learn',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Store',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'iPad',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'iPhone',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Watch',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'AirPods',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'TV & Home',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'AirTag',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Accessories',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     },
     {
          title: 'Gift Cards',
          link: 'https://www.apple.com/#:~:text=Shop%20and%20Learn-,Store,-Mac'
     }
     ]
}
function Navigation () {
  return (
     <nav className='Navigation'>
          <div className="row navigation_wrapper">
                    <div className="direction_column">
                      <ColumnList items={Nav.column_one} />
                    </div>       
                    <div className="direction_column">
                      <ColumnList items={Nav.column_two} />
                    </div>       
                    <div className="direction_column">
                         <ColumnList items={Nav.column_three} />
                    </div>       
                    <div className="direction_column">
                         <ColumnList items={Nav.column_four} />
                    </div>       
                    <div className="direction_column">
                         <ColumnList items={Nav.column_five} />
                    </div>       
          </div>
    </nav>
  )
}

export default Navigation