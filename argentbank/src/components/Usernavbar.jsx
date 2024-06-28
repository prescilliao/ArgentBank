import React from 'react'
import Logo from '../designs/img/argentBankLogo.png'
import { Link } from 'react-router-dom'

function Usernavbar() {
    return (
        <div><nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to="/user">
                    <i className="fa fa-user-circle"></i>
                    Tony
                </Link>
                <Link className="main-nav-item" to="/">
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </Link>
            </div>
        </nav></div>
    )
}

export default Usernavbar