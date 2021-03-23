import React from "react";
import { Route, Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";


const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
        )
    )}/>
);

const Protected = ({component: Component, path, loggedIn, workspaceSet, exact}) => (
    <Route path={path} exact={exact} render={(props) => {
        if (loggedIn) {
            if (path==="/workspace" || workspaceSet)
                return (<Component {...props} />);
            else
                return (<Redirect to="/workspace" />);

        }
        else return (<Redirect to="/login" />);
        
    }}/>
);

const mSTP = state => {
    return {
        loggedIn: Boolean(state.session.currentUserId),
        workspaceSet: Boolean(state.session.currentWorkspaceId)
    }

}

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));