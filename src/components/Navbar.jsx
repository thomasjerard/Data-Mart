import React from 'react';
import "../styles/Navbar.scss";
import { Button } from '@carbon/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cookie, setCookie, removeCookie] = useCookies(['isValid', 'isAdmin']);

  const handlePublished = () => {
    navigate("/published");
  }

  const handleDraft = () => {
    navigate("/drafted");
  }

  const handleHome = () => {
    navigate("/");
  }

  const handleSignOut = async e => {
    e.preventDefault();
    setCookie('userRole', null);
    navigate("/signin");
  }

  const isCurrentSection = (path) => {
    // Compare the current location with the path to determine if it's the current section
    // return location.pathname === path;
    return false;
  }

  return (
    <div id="navbar">
      <Button className={`home ${isCurrentSection("/") ? "current" : ""}`} onClick={handleHome}>Data Mart</Button>
      <div className='empty' ></div>
      {cookie.userRole === "producer" && <Button className={`published ${isCurrentSection("/published") ? "current" : ""}`} onClick={handlePublished}>Published</Button>}
      {cookie.userRole === "producer" && <Button className={`drafts ${isCurrentSection("/drafted") ? "current" : ""}`} onClick={handleDraft}>Drafts</Button>}
      <Button className="signOut" onClick={handleSignOut}>Log Out</Button>
    </div>
  );
}

export default Navbar;
