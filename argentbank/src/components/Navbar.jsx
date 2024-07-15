import React from 'react'
import Logo from '../designs/img/argentBankLogo.png'
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  function Disconnect() {
    localStorage.removeItem("token")
    navigate("/")
  }
  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        {!token ? <div>
          <Link className="main-nav-item" to="api/v1/user/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div> : <div>
          <Link className="main-nav-item" to="api/v1/user">
            <i className="fa fa-user-circle"></i>
            Tony
          </Link>
          <a className="main-nav-item" onClick={() => Disconnect()}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        </div>}

      </nav>
    </div>
  )
}

export default Navbar