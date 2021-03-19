import React from "react";
import { Route } from "react-router-dom";
import {AuthRoute, ProtectedRoute} from "../util/route_util.jsx";
import SplashPage from "./splash_page";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";

const App = () => (
    <div>
        <header>
            {/* <h1>Welcome to Slacker</h1> */}
            {/* <img src={slackerRGBUrl}/> */}
            {/* <Route exact path="/" component={GreetingContainer} /> */}
        </header>
            <AuthRoute path="/login" exact component={LoginFormContainer} />
            <AuthRoute path="/signup" exact component={SignupFormContainer} />
            <Route path="/" exact component={SplashPage} />
    </div>
);

export default App;