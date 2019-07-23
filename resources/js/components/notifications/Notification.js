import React, {memo} from 'react'

const Notification = memo((props) => {
	return (
		<li className={props.class}>
			{props.text}
			<span className={'remove'}>x</span>
		</li>
	)
});


export default Notification;