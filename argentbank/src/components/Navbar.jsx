import React from 'react'
import Logo from '../designs/img/argentBankLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


function Navbar() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  // const token = localStorage.getItem("token")
  // const name = localStorage.getItem("user")
  // const user = JSON.parse(name);
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/")
    window.location.reload()
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

        {!token && !user ? (<div>
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>) : (<div>
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {user?.userName}
          </Link>
          <a className="main-nav-item" onClick={() => logout()}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        </div>)}

      </nav>
    </div>
  )
}

export default Navbar