import React from 'react';
import { Redirect, Route } from "react-router-dom";
import store from 'store';
// import { getToken } from 'utils'

export const PrivateRoute = ({ component: Component, handleChildFunc, ...rest }) => {
    let isLoggedIn = (store.getState().User && store.getState().User.user && store.getState().User.user.loggedIn) || false

    return <Route
        {...rest}
        render={
            props => {
                if (props.location.pathname === '/signin') {
                    if (isLoggedIn)
                        return <Redirect to='/' />
                }
                return <Component {...props} />
            }} />
}

