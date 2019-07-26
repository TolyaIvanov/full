import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProfileContainer extends Component {
	render() {
		return (
			<div>
				<h1>PRIVET ETO UR CABINET {this.props.match.params.profile}</h1>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);