import React, {Component, Fragment, lazy} from 'react'
import {connect} from 'react-redux'
import Error from "./Error"
import {Route, Switch} from "react-router-dom"
import {PrivateRoute} from './PrivateRoute'

const Home = lazy(() => import('./components/home/Home'));
const Gallery = lazy(() => import('./components/gallery/Gallery'));
const Try = lazy(() => import('./components/try/Try'));
const LoginContainer = lazy(() => import('./containers/auth/login/LoginContainer'));
const RegistrationContainer = lazy(() => import('./containers/auth/registration/RegistrationContainer'));
const ProfileContainer = lazy(() => import('./containers/profile/ProfileContainer'));

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/profile/:username'} component={ProfileContainer}/>
                <Route path={'/gallery'} component={Gallery}/>
                <Route path={'/login'} component={LoginContainer}/>
                <Route path={'/signup'} component={RegistrationContainer}/>
                <PrivateRoute redirect={'/login'} path={'/try'} component={Try}/>
                <Route component={Error}/>
            </Switch>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});


export default connect(mapStateToProps, null)(Routes);
