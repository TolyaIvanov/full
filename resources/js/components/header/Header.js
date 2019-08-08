import React, {memo} from 'react'
import {Link, NavLink} from "react-router-dom";
import Dropdown from './Dropdown'

import logoSmall from './../../../images/large/logo-small.png'
import LoginLogo from './../../icons/LoginLogo'

const Header = memo((props) => (
    <header className="navbar">
        <div className="navbar-item-logo"><Link to="/"><img src={logoSmall} alt={'logo'}/></Link></div>
        <div className="menu-wrapper">
            <div
                className={props.headerIsOpened ? "menu-button-wrapper active" : "menu-button-wrapper"}
                onClick={props.toggleMenu}
            >
                <div className={'line'}></div>
            </div>
            <ul
                className={props.headerIsOpened ? "navbar-menu active" : "navbar-menu"}
            >
                <li className={'navbar-item'} onClick={props.toggleMenu}><NavLink to={'/'}>Home</NavLink></li>
                <li className={'navbar-item'} onClick={props.toggleMenu}><NavLink to={'/gallery'}>Gallery</NavLink></li>
                <li className={'navbar-item'} onClick={props.toggleMenu}><NavLink to={'/try'}>Try it</NavLink></li>
                <li className={'navbar-item'}>
                    <a rel="noreferrer" href="http://t.me/neuroartaibot" target="_blank">Buy now</a>
                </li>
                {
                    props.isAuthenticated ?
                        <li
                            className={props.headerDropdownIsOpened ? 'navbar-item dropdown-wrapper' : 'navbar-item'}
                            onClick={props.toggleDropdown}
                        >
                            <div className="login-logo-wrapper">
                                <LoginLogo
                                    className={'login-logo'}
                                    fill={'#fff'}
                                />
                                <div className="dropdown-mark">[]</div>
                            </div>
                            <Dropdown
                                logout={props.logout}
                                username={props.username}
                            />
                        </li>
                        :
                        <li className={'navbar-item'}>
                            <Link to={'/login'}>
                                <LoginLogo
                                    className={'login-logo'}
                                    fill={'#fff'}
                                />
                            </Link>
                        </li>
                }
            </ul>
        </div>
    </header>
));


export default Header;
