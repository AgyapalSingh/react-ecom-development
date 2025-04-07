import React from 'react'
import NavBarDesk from './NavBarDesk'
import AnnounceMentBar from './AnnoucementBar'


const Header = () => {
  return (
    <header>
      <AnnounceMentBar/>
      <NavBarDesk/>
    </header>
  )
}

export default Header