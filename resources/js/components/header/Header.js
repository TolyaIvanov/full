import React from 'react'
import {Link, NavLink} from "react-router-dom";
// import Logo from './../../icons/LoginLogo';

const Header = () => (
	<header className="navbar">
		<div className="navbar-item-logo"><Link to="/"><img src="./images/logo-small.png"/></Link></div>
		<ul className="navbar-menu">
			<li className="navbar-item"><NavLink to={'/gallery'} activeClassName={'active'}>Home</NavLink></li>
			<li className="navbar-item"><NavLink to={'/try'} activeClassName={'active'}>Examples</NavLink></li>
			<li className="navbar-item"><NavLink to={'/try'} activeClassName={'active'}>About us</NavLink></li>
			<li className="navbar-item"><NavLink to={'/try'} activeClassName={'active'}>Purpose</NavLink></li>
			<li className="navbar-item"><a rel="nofollow" href="http://t.me/neuroartaibot" target="_blank">Buy now</a></li>
			{/*<li className={"navbar-item"}></li>*/}
		</ul>
	</header>
);

export default Header;