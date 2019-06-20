import React from 'react';
import {connect} from "react-redux";

import Subscribe from './../../components/home/parts/Subscribe';

import {fetchEmail} from "../../actions/subscribe/fetchEmail";
import {emailChanging} from "../../actions/subscribe/actionCreators";

import {
	FETCH_EMAIL
} from "../../constants/defaultConstants";

class SubscribeContainer extends React.Component {
	render() {
		return (
			<Subscribe
				value={this.props.data.value}
				input={this.props.input}
				send={this.props.send}
			/>
		);
	}
}

const mapStateToProps = state => ({
	data: state.emailChanging,
});

const mapDispatchToProps = dispatch => ({
	input: (event) => dispatch(emailChanging(event.target.value)),
	send: () => dispatch(fetchEmail(FETCH_EMAIL))
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeContainer);