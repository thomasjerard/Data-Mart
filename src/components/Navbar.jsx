import React from 'react'
import "../styles/Navbar.scss"
import { Button } from '@carbon/react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../global/AuthSlice'
import { useCookies } from 'react-cookie';

function Navbar() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [cookie, setCookie, removeCookie] = useCookies(['isValid','isAdmin']);

  const handlePublished = () => {
    navigate("/published");
  }
  const handleDraft = () => {
    navigate("/drafts");
  }
  const handleHome = () => {
    navigate("/")
  }
  const handleSignOut = async e => {
    e.preventDefault();
    // dispatch(
    //   logout()
    // );    
    setCookie('isValid',false);
  }

  return (
    <div id="navbar">
      <Button className="home" onClick={handleHome}>Data Mart</Button>
      <div className='empty'></div>
      <Button className="published" onClick={handlePublished}>Published</Button>
      <Button className="drafts" onClick={handleDraft}>Drafts</Button>
      <Button className="signOut" onClick={handleSignOut}>Log Out</Button>
    </div>
  )
}

export default Navbar