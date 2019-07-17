import React from 'react'
import {Link, NavLink} from "react-router-dom";

import LoginLogo from './../../icons/LoginLogo';

class Header extends React.Component {
	render() {
		return (
			<header className="navbar">
				<div className="navbar-item-logo"><Link to="/"><img src="./images/logo-small.png"/></Link></div>
				<div className="menu-wrapper">
					<div
						className={this.props.isOpened ? "menu-button-wrapper active" : "menu-button-wrapper"}
						onClick={this.props.toggle}
					>
						<div className={'line'}></div>
					</div>
					<ul
						className={this.props.isOpened ? "navbar-menu active" : "navbar-menu"}
						onClick={this.props.toggle}
					>
						<li className={'navbar-item'}><NavLink to={'/'}>Home</NavLink></li>
						<li className={'navbar-item'}><NavLink to={'/gallery'}>Gallery</NavLink></li>
						<li className={'navbar-item'}><NavLink to={'/try'}>Try it</NavLink></li>
						<li className={'navbar-item'}>
							<a rel="nofollow" href="http://t.me/neuroartaibot" target="_blank">Buy now</a>
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
		);
	}
}

export default Header;