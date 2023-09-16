import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {

    // Toggle Menus

    const [Toggle, showMenu] = useState(false);


    return (
        <header className="header">
            <nav className="nav container">
                <Link to="/" className="nav__logo">
                    <img className="w-36" src="Tracking.png" alt="" />
                </Link>
                <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <Link to="/" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i>Home
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>About
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i>Services
                            </Link>
                        </li>



                        <li className="nav__item">
                            <Link to="/contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>Contact
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/login" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i>Login
                            </Link>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" id="nav-close" onClick={() => { showMenu(!Toggle) }}></i>
                </div>
                <div className="nav_toggle">
                    <Link to="#portfolio" className="nav__link">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256"
                            style={{fill:"#0E9F6E"}}>
                            <g fill="#0e9f6e" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(2,2)"><path d="M12.81,46.31c0.24,0.06 0.49,0.09 0.73,0.09c1.34,0 2.57,-0.91 2.91,-2.27c2.78,-11.12 9.4,-20.97 18.63,-27.71c1.34,-0.98 1.63,-2.85 0.65,-4.19c-0.98,-1.34 -2.85,-1.63 -4.19,-0.65c-10.36,7.57 -17.79,18.61 -20.91,31.1c-0.41,1.6 0.57,3.23 2.18,3.63zM92.93,16.42c9.23,6.74 15.84,16.58 18.63,27.71c0.34,1.36 1.56,2.27 2.91,2.27c0.24,0 0.49,-0.03 0.73,-0.09c1.61,-0.4 2.58,-2.03 2.18,-3.64c-3.12,-12.48 -10.55,-23.53 -20.91,-31.1c-1.34,-0.98 -3.21,-0.69 -4.19,0.65c-0.98,1.35 -0.69,3.22 0.65,4.2zM19.2,90.85c-0.98,3.91 -0.12,7.98 2.37,11.15c2.48,3.18 6.22,5 10.25,5h14.46c1.43,8.5 8.83,15 17.73,15c8.9,0 16.29,-6.5 17.73,-15h14.46c4.03,0 7.77,-1.82 10.25,-5c2.48,-3.18 3.34,-7.24 2.37,-11.15l-10.85,-43.32c-3.9,-15.62 -17.87,-26.53 -33.97,-26.53c-16.1,0 -30.07,10.91 -33.97,26.53zM64,116c-5.58,0 -10.27,-3.83 -11.61,-9h23.21c-1.33,5.17 -6.02,9 -11.6,9zM64,27c13.34,0 24.92,9.04 28.15,21.98l10.83,43.32c0.53,2.11 0.06,4.29 -1.27,6.01c-1.34,1.71 -3.35,2.69 -5.52,2.69h-64.38c-2.17,0 -4.18,-0.98 -5.52,-2.69c-1.34,-1.71 -1.8,-3.9 -1.27,-6.01l10.83,-43.32c3.23,-12.94 14.81,-21.98 28.15,-21.98z"></path></g></g>
                        </svg>
                    </Link>
                </div>
                <div className="nav__toggle" onClick={() => { showMenu(!Toggle) }}>
                    <i className="uil uil-apps" id="nav-toggle"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;
