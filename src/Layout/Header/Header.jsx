import React from 'react'
import NavBarDesk from './NavBarDesk'
import AnnounceMentBar from './AnnounceMentBar'


const Header = () => {
  return (
    <header>
      <AnnounceMentBar/>
      <NavBarDesk/>
    </header>
  )
}

export default Header