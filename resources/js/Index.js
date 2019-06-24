import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Switch} from "react-router-dom"
import {Provider} from 'react-redux'
import history from './history/history'
import store from './store/store'

import Error from './Error'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Gallery from './components/gallery/Gallery'
import Try from './components/try/Try'
import NotificationContainer from './containers/notifications/NotificationContainer'

class Index extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<Header/>
					<Switch>
						<Route exact path={'/'} component={Home}/>
						<Route path={'/gallery'} component={Gallery}/>
						<Route path={'/try'} component={Try}/>
						<Route component={Error}/>
					</Switch>
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
