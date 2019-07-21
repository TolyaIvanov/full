import React, {Component, lazy, Suspense} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Switch} from "react-router-dom"
import {Provider} from 'react-redux'
import history from './history/history'
import store from './store/store'

import Error from './Error'
import HeaderContainer from './containers/header/HeaderContainer'
import Footer from './components/footer/Footer'
import NotificationContainer from './containers/notifications/NotificationContainer'

const Home = lazy(() => import('./components/home/Home'));
const Gallery = lazy(() => import('./components/gallery/Gallery'));
const Try = lazy(() => import('./components/try/Try'));
const LoginContainer = lazy(() => import('./containers/auth/login/LoginContainer'));
const RegistrationContainer = lazy(() => import('./containers/auth/registration/RegistrationContainer'));


class Index extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<HeaderContainer/>
					<Suspense fallback={<p>kek</p>}>
						<Switch>
							<Route exact path={'/'} component={Home}/>
							<Route path={'/gallery'} component={Gallery}/>
							<Route path={'/login'} component={LoginContainer}/>
							<Route path={'/registration'} component={RegistrationContainer}/>
							<Route path={'/try'} component={Try}/>
							<Route component={Error}/>
						</Switch>
					</Suspense>
					<Footer/>
					<NotificationContainer/>
				</Router>
			</Provider>
		);
	}
}

if (document.getElementById('root')) {
	ReactDOM.render(<Index/>, document.getElementById('root'));
}
