import React from 'react'
import './Footer.css'
import TextContent from './TextOntent/TextContent'
import Navigation from './Navigation/Navigation'
import FooterEnd from './FooterEnd/FooterEnd'

function Footer () {
  return (
     <footer className='footer'>
          <TextContent />
          <Navigation />
          <FooterEnd />
    </footer>
  )
}

export default Footer