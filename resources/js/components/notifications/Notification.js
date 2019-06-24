import React from 'react'

const Notification = props => {
	return (
		<li className={props.class}>
			{props.text}
			<span className={'remove'}>x</span>
		</li>
	)

};


export default Notification;