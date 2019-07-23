import React, {memo} from 'react'
import {Link, NavLink} from "react-router-dom";

import logoSmall from './../../../images/large/logo-small.png'

import LoginLogo from './../../icons/LoginLogo';

const Header = memo((props) => (
	<header className="navbar">
		<div className="navbar-item-logo"><Link to="/"><img src={logoSmall} alt={'logo'}/></Link></div>
		<div className="menu-wrapper">
			<div
				className={props.isOpened ? "menu-button-wrapper active" : "menu-button-wrapper"}
				onClick={props.toggle}
			>
				<div className={'line'}></div>
			</div>
			<ul
				className={props.isOpened ? "navbar-menu active" : "navbar-menu"}
				onClick={props.toggle}
			>
				<li className={'navbar-item'}><NavLink to={'/'}>Home</NavLink></li>
				<li className={'navbar-item'}><NavLink to={'/gallery'}>Gallery</NavLink></li>
				<li className={'navbar-item'}><NavLink to={'/try'}>Try it</NavLink></li>
				<li className={'navbar-item'}>
					<a rel="noreferrer" href="http://t.me/neuroartaibot" target="_blank">Buy now</a>
				</li>
				<li className={'navbar-item'}>
					<Link to={'/login'}>
						<LoginLogo
							className={'login-logo'}
							fill={'#fff'}
						/>
					</Link>
				</li>
			</ul>
		</div>
	</header>
));


export default Header;