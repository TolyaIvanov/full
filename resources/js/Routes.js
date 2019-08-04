import React, {Component, Fragment, lazy} from 'react';
import {connect} from 'react-redux';
import Error from "./Error";
import {Route, Switch} from "react-router-dom"


const Home = lazy(() => import('./components/home/Home'));
const Gallery = lazy(() => import('./components/gallery/Gallery'));
const Try = lazy(() => import('./components/try/Try'));
const LoginContainer = lazy(() => import('./containers/auth/login/LoginContainer'));
const RegistrationContainer = lazy(() => import('./containers/auth/registration/RegistrationContainer'));
const ProfileContainer = lazy(() => import('./containers/profile/ProfileContainer'));
const AdminPanelContainer = lazy(() => import('./containers/admin/AdminPanelContainer'))


class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route exact path={'/'} component={Home}/>
				<Route path={'/gallery'} component={Gallery}/>
				<Route path={'/try'} component={Try}/>
				<Route path={'/admin'} component={AdminPanelContainer}/>
				{                                                           //todo make custom route component
					this.props.auth.isAuthenticated ?
						<Fragment>
							<Route path={'/:username'} component={ProfileContainer}/>
						</Fragment>
						:
						<Fragment>
							<Route path={'/login'} component={LoginContainer}/>
							<Route path={'/signup'} component={RegistrationContainer}/>
						</Fragment>
				}
				<Route component={Error}/>
			</Switch>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
});


export default connect(mapStateToProps, null)(Routes);