import React from 'react'
import NavBar from './NavBar'
import AnnounceMentBar from './AnnounceMentBar'


const Header = () => {
  return (
    <header>
      <AnnounceMentBar/>
      <NavBar/>
    </header>
  )
}

export default Header