import React from 'react'
import NavBarDesk from './NavBarDesk'
import AnnoucementBar from './AnnoucementBar'

const Header = () => {
  return (
    <header>
      <AnnoucementBar/>
      <NavBarDesk/>
    </header>
  )
}

export default Header