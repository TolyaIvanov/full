import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './../../components/header/Header'

import {
	toggleMenu
} from "../../actions/header/actionCreator";

class HeaderContainer extends Component {
	render() {
		return (
			<Header
				isOpened={this.props.menu.isOpened}
				toggle={this.props.toggleMenu}
			>
			</Header>
		);
	}
}

const mapStateToProps = (state) => ({
	menu: state.menu
});

const mapDispatchToProps = (dispatch) => ({
	toggleMenu: () => dispatch(toggleMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);