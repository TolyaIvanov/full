import React from 'react';
import {Link} from 'react-router-dom'

const Dropdown = (props) => {
	return (
		<ul className={'dropdown-menu'}>
			<li className={'dropdown-menu-item'}><Link to={`/profile/${props.username}`}>Profile</Link></li>
			<li className={'dropdown-menu-item'} onClick={props.logout}>Logout</li>
		</ul>
	);
};

export default Dropdown;
