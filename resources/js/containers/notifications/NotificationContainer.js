import React from 'react'
import {connect} from "react-redux"

import Notification from './../../components/notifications/Notification'

import {
	addNotification,
	deleteNotifications,
} from "../../actions/notifications/notifications";

class NotificationContainer extends React.Component {
	render() {
		return (
			<ul className={'notifications'}>
				{this.renderNotifications()}
			</ul>
		);
	}

	renderNotifications = notifications => {
		let id = 0;

		return notifications && notifications.map(note => {
			id++;

			return (
				<Notification
					key={id}
					onDissMissClick={() => this.state.remove(id)}
					text={note.text}
				/>
			);
		})
	}
}

const mapStateToProps = state => ({
	notifications: state.notifications
});

const mapDispatchToProps = dispatch => ({
	add: (info) => dispatch(addNotification(info)),
	remove: (id) => dispatch(deleteNotifications(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);
