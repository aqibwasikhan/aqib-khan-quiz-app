import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
  return (
      <div className={'header-layout'}>
      <Link to="/" className="title-header">
        Quiz app
      </Link>
      <hr className="divider" />
    </div>
  );
}

export default Header