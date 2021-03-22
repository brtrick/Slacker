import React from "react";
import {Link, Redirect} from "react-router-dom"
import {emailValid} from "../util/regex_util"


export default class SessionForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            fullName: "",
            displayName: "", 
            email: "",
            password: "",
            fullNameErrorMessage: "",
            emailErrorMessage:  "",
            passwordErrorMessage: ""
        };
        this.emailError = false;
        this.passwordError = false;
        this.fullNameError = false;
        this.submit = false;
        this.renderServerErrors = false;
        this.serverEmailErrorMessage = "";
        this.serverPasswordErrorMessage = "";
        this.serverErrorMessages = [];

        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemoUser = this.loginDemoUser.bind(this);
    }

    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    handleChange (field) {
        return (e) => {
            if (this.renderServerErrors) {
                if ("field" !== "email")
                    this.setState({emailErrorMessage: this.serverEmailErrorMessage});
                if ("field" !== "password")
                    this.setState({passwordErrorMessage: this.serverPasswordErrorMessage});
                this.renderServerErrors = false;
            }
            if (this.submit) {
                this[field+'Error'] = false;
                this.processFrontendErrors(field, e.target.value);
            }
            this.setState({[field]: e.target.value});  
        };
    }
    
    processFrontendErrors(field, content) {
        if (content === "") {
            this[field + 'Error'] = true;
            this.setState({ [field + 'ErrorMessage']: `Please fill in your ${field}.` });
        }
        else if (field === "email" && !emailValid(content)) {
            this.emailError = true;
            this.setState({ emailErrorMessage: "Sorry, but that email is invalid." });
        }
    }

    processServerErrors() {
        this.serverErrorMessages = [];
        this.serverEmailErrorMessage = "";
        this.serverPasswordErrorMessage = "";

        this.props.errors.forEach( (error, idx) => {
            switch (error.substr(0, error.indexOf(" "))) {
                case 'Email':
                    this.emailError = true;
                    this.serverEmailErrorMessage = error;
                    break;
                case 'Password':
                    this.passwordError = true;
                    this.serverPasswordErrorMessage = error;
                    break;
                default:
                    this.serverErrorMessages.push(<li key={idx}><span>{error}</span></li>);
            }
        })
    }

    handleSubmit (e) {
        e.preventDefault();
        this.submit = true;
        this.processFrontendErrors("email", this.state.email);
        this.processFrontendErrors("password", this.state.password);
        if (this.props.formType === "signup")
            this.processFrontendErrors("fullName", this.state.fullName);
        
        if (!this.emailError && !this.passwordError && !this.fullNameError) {
            const user = {
                full_name: this.state.fullName, 
                display_name: this.state.displayName, 
                email: this.state.email,
                password: this.state.password
            };
            this.renderServerErrors = true;
            this.props.processForm(user);
        }
    }

    loginDemoUser (e) {
        e.preventDefault();
        const user = {
            email: "slacker@slacker.com",
            password: "slacker"
        };
        this.props.processForm(user);
    }

    render () {
        const formType = this.props.formType;
        let emailErrorMessage, passwordErrorMessage;
        if (this.renderServerErrors) {
            this.processServerErrors();
            emailErrorMessage = this.serverEmailErrorMessage;
            passwordErrorMessage = this.serverPasswordErrorMessage;
        }
        else {
            emailErrorMessage = this.state.emailErrorMessage;
            passwordErrorMessage = this.state.passwordErrorMessage;
        }
        
        return (
            <div className="session-form-page">
                <div className="session-form-header">
                    <Link to='/'><img className="logo" src={slackerRGBUrl} /></Link>
                    <div className="nav-link">
                        {formType === "signup" ? 
                            <p>Already a Slacker?</p> :
                            <p>New to Slacker?</p>
                        }           
                        <Link to={`/${formType === "signup" ? "login" : "signup"}`}>
                            {formType === "signup" ? "Login" : "Create an account"}
                        </Link>
                    </div>
                </div>
                
                <form className="session-form-form">
                    <h1>{formType === "signup" ? "Sign Up" : "Sign in to Slacker"}</h1>
                    <p><span>We suggest using the <strong> email address you use at work.</strong></span></p>

                    <div className="server-errors">
                            <ul className="server-errors-list">
                                {this.serverErrorMessages}
                            </ul>
                    </div>

                    <div className="form-inputs">
                        {(formType === "signup") ? (
                            <div className="get-input">
                                <input className={"session-input" + (this.fullNameError ? " error" : "")} type="text" onChange={this.handleChange('fullName')} value={this.state.fullName} placeholder='Full name (e.g., "John Smith")'/>
                                <p className={"feedback" + (this.fullNameError ? " error" : "")}>{<img className="triangleWarning" src={triangleWarning}/>} {this.state.fullNameErrorMessage}</p>
                            </div>
                        ) : ""}
                        {(formType === "signup") ? (
                            <div className="get-input">
                                <input className="session-input" type="text" onChange={this.handleChange('displayName')} value={this.state.displayName} placeholder='Display name (optional)'/>
                            </div>
                        ) : ""}
                        
                        <div className="get-input">
                            <input className={"session-input" + (this.emailError ? " error" : "")} type="text" onChange={this.handleChange('email')} value={this.state.email} placeholder="name@work-email.com"/>
                            <p className={"feedback" + (this.emailError ? " error" : "")}>{<img className="triangleWarning" src={triangleWarning}/>} {emailErrorMessage}</p>
                        </div>
                        <div className="get-input">
                            <input className={"session-input" + (this.passwordError ? " error" : "")} type="password" onChange={this.handleChange('password')} value={this.state.password} placeholder={"Password" + (formType === "signup" ? " (must be at least 6 characters)" : "")}/>
                            <p className={"feedback" + (this.passwordError ? " error" : "")}>{<img className="triangleWarning" src={triangleWarning}/>} {passwordErrorMessage}</p>
                        </div>
                        <button type="submit" onClick={this.handleSubmit}>{formType === "signup" ? "Sign Up" : "Sign In with Email"}</button>
                        {formType==="login" ? (
                            <button type="button" id="demo" onClick={this.loginDemoUser}>Login as Slacker Demo</button>
                        ) : ""}
                        </div>
                </form>
            </div>
        )
    }
}
