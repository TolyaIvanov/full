import React from 'react'
import ReactDOM from 'react-dom';

class Notification extends React.Component{
	constructor(props) {
		super(props);
	}

	notification = document.createElement('div');

	componentDidMount() {
		document.body.appendChild(this.notification);
	}

	componentWillUnmount() {
		document.body.removeChild(this.notification);
	}

	render() {
		return ReactDOM.createPortal(this.props.children, this.notification);
	}
}

export default Notification;