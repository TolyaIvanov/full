import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './../../components/header/Header'

import {
	toggleMenu,
	toggleDropdown,
} from "../../actions/header/actionCreator";

import {
	logoutUser
} from "../../actions/auth/authentication";

class HeaderContainer extends Component {
	render() {
		const {isAuthenticated} = this.props.auth;

		return (
			<Header
				headerIsOpened={this.props.menu.headerIsOpened}
				headerDropdownIsOpened={this.props.menu.headerDropdownIsOpened}
				toggleMenu={this.props.toggleMenu}
				toggleDropdown={this.props.toggleDropdown}
				isAuthenticated={isAuthenticated}
				logout={this.props.logout}
			>
			</Header>
		);
	}
}

const mapStateToProps = (state) => ({
	menu: state.menu,
	auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
	toggleMenu: () => dispatch(toggleMenu()),
	toggleDropdown: (event) => {
		console.log(event);
		event.stopPropagation();
		dispatch(toggleDropdown())
	},
	logout: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);