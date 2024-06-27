import React from 'react'
import Logo from '../designs/img/argentBankLogo.png'

function Usernavbar() {
    return (
        <div><nav className="main-nav">
            <a className="main-nav-logo" href="./index.html">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a className="main-nav-item" href="./user.html">
                    <i className="fa fa-user-circle"></i>
                    Tony
                </a>
                <a className="main-nav-item" href="./index.html">
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </a>
            </div>
        </nav></div>
    )
}

export default Usernavbar