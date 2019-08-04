import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'

const token = localStorage.getItem('token');
const username = localStorage.getItem('username');

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        ((token) && (username))
            ? <Component {...props} />
            : <Redirect to='/login'/>
    )}/>
);
