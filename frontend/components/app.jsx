import React from "react";
import { Route } from "react-router-dom"
import SplashPage from "./splash_page"
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";

const App = () => (
    <div>
        <header>
            {/* <h1>Welcome to Slacker</h1> */}
            {/* <img src={slackerRGBUrl}/> */}
            {/* <Route exact path="/" component={GreetingContainer} /> */}
        </header>
            <Route path="/" exact component={SplashPage} />
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;