import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import {AuthRoute, ProtectedRoute} from "../util/route_util.jsx";
import SplashPage from "./splash_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import HomeContainer from "./home_container";
import WorkspaceSelectionContainer from "./session/workspace_selection_container";

const App = () => (
    <div>
        <header>
            
            {/* <Route exact path="/" component={GreetingContainer} /> */}
        </header>
        <Switch>
            <AuthRoute path="/login" exact component={LoginFormContainer} />
            <AuthRoute path="/signup" exact component={SignupFormContainer} />
            <Route path="/splash" exact component={SplashPage} />
            <ProtectedRoute path="/workspace" exact component={WorkspaceSelectionContainer} />
            <ProtectedRoute path="/" exact component={HomeContainer} />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;