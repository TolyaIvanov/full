import React from 'react';
import {connect} from "react-redux";

import Mission from '../../../components/home/parts/Mission';

import {
	changeMissionInput
} from "../../../actions/home/mission/actionCreator";

class MissionContainer extends React.Component {
	render() {
		return (
			<Mission
				onChange={this.props.changeInput}
				nameValue={this.props.inputs['name']}
				emailValue={this.props.inputs['email']}
				messageValue={this.props.inputs['message']}
			/>
		);
	}
}

const mapStateToProps = state => ({
	inputs: state.missionInputs,
});

const mapDispatchToProps = dispatch => ({
	changeInput: (name, value) => dispatch(changeMissionInput(name, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(MissionContainer);