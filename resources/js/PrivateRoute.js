import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'

export const PrivateRoute = ({component: Component, redirect, ...rest}) => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    return (
        <Route
            {...rest}
            render={(props) => (
                ((token) && (username))
                    ? <Component {...props} />
                    : <Redirect to={redirect}/>
            )}
        />
    )
};

