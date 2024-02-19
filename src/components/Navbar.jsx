import React from 'react'
import "../styles/Navbar.scss"
import { Button } from '@carbon/react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  const handlePublished = () => {
    navigate("/published");
  }
  const handleDraft = () => {
    navigate("/drafts");
  }
  const handleHome = () => {
    navigate("/")
  }
  const handleSignin = () => {
    navigate("/signin")
  }

  return (
    <div id="navbar">
      <Button className="home" onClick={handleHome}>Data Mart</Button>
      <div className='empty'></div>
      <Button className="published" onClick={handlePublished}>Published</Button>
      <Button className="drafts" onClick={handleDraft}>Drafts</Button>
      <Button className="signin" onClick={handleSignin}>Signin</Button>
    </div>
  )
}

export default Navbar