import React from 'react'
import "../styles/Navbar.scss"
import { Button } from '@carbon/react'

function Navbar() {
  return (
    <div id="navbar">
      <Button className="home">Data Mart</Button>
      <div className='empty'></div>
      <Button className="published">Published</Button>
      <Button className="drafts">Drafts</Button>
    </div>
  )
}

export default Navbar