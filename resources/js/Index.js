import React, {Component, Suspense} from 'react'
import ReactDOM from 'react-dom'
import {Router} from "react-router-dom"
import {Provider} from 'react-redux'
import history from './history/history'
import store from './store/store'
import setAuthToken from './setAuthToken'
import {
	setCurrentUser
} from "./actions/auth/actionCreator";

import Routes from './Routes'
import HeaderContainer from './containers/header/HeaderContainer'
import Footer from './components/footer/Footer'
import NotificationContainer from './containers/notifications/NotificationContainer'

const token = localStorage.getItem('token');
const username = localStorage.getItem('username');

if (token && username) {
	console.log(token);
	setAuthToken(token);
	store.dispatch(setCurrentUser({username, token}));
} else {
	localStorage.removeItem('token');
	localStorage.removeItem('username');
}

class Index extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<HeaderContainer/>
					<Suspense fallback={null}>
						<Routes/>
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
