import React from 'react'
import {Link, NavLink} from "react-router-dom";

const Header = () => (
	<header className="navbar">
		<div className="navbar-item-logo"><Link to="/"><img src="./images/logo-small.png"/></Link></div>
		<ul className="navbar-menu">
			<li className="navbar-item"><NavLink to={'/gallery'} activeClassName={'active'}>Portfolio</NavLink></li>
			<li className="navbar-item"><NavLink to={'/try'} activeClassName={'active'}>How it works</NavLink></li>
			<li className="navbar-item"><a rel="nofollow" href="http://t.me/neuroartaibot" target="_blank">Buy now</a></li>
		</ul>
	</header>
);

export default Header;