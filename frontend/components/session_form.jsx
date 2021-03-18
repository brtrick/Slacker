import React from "react";
import {Link, Redirect} from "react-router-dom"
import errors_reducer from "../reducers/errors_reducer";

const emailValid = (email) => {
    return /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-][-a-zA-Z0-9!#$%&'*+/=?^_`{|}~.]*(?<!\.)@(?!\.)[-a-zA-Z0-9!#$%&'*+/=?^_`{|}~.]+(?:\.[a-zA-Z0-9-]+)+$/.test(email)
            && !/\.\./.test(email)
}

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
        this.renderServerErrors = true;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (field) {
        return (e) => {
            if (this.renderServerErrors) {
                this.renderServerErrors = false;
                this.setState()
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

    processServerErrors(emailErrorMessages, passwordErrorMessages) {
        const serverErrorMessages = [];
        this.props.errors.forEach( (error, idx) => {
            switch (error.substr(0, error.indexOf(" "))) {
                case 'Email':
                    this.emailError = true;
                    emailErrorMessages.push(error);
                    break;
                case 'Password':
                    this.passwordError = true;
                    passwordErrorMessages.push(error);
                    break;
                default:
                    serverErrorMessages.push(`<li key=${idx}>${error}</li>`);
            }
            return serverErrorMessages;
        })
    }

    handleSubmit (e) {
        e.preventDefault();
        this.submit = true;
        this.processFrontendErrors("email", this.state.email);
        this.processFrontendErrors("password", this.state.password);
        if (this.formType === "signup")
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

    render () {
        const formType = this.props.formType;
        let emailErrorMessages = [], passwordErrorMessages = [], serverErrorMessages;
        if (this.renderServerErrors) 
            serverErrorMessages = this.processServerErrors(emailErrorMessages, passwordErrorMessages);
        else {
            emailErrorMessages = [this.state.emailErrorMessage];
            passwordErrorMessages = [this.state.passwordErrorMessage];
        }
         
        // const serverErrorMessages = this.props.map(
        //     (error, idx) => (<li key={idx}>{error}</li>)
        // )
        
        return (
            <div className="session-form-page">
                <div className="session-form-header">
                    <img className="logo" src={slackerRGBUrl}></img>
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
                                {serverErrorMessages}
                            </ul>
                    </div>

                    <div className="form-inputs">
                        {(formType === "signup") ? (
                            <div className="get-input">
                                <input className={"session-input" + (this.fullNameError ? " error" : "")} type="text" onChange={this.handleChange('fullName')} value={this.state.fullName} placeholder='Full name (e.g., "John Smith")'/>
                                <p className={"feedback" + (this.fullNameError ? " error" : "")}>{<img className="triangleWarning" src={triangleWarning}></img>} {this.state.fullNameErrorMessage}</p>
                            </div>
                        ) : ""}
                        {(formType === "signup") ? (
                            <div className="get-input">
                                <input className="session-input" type="text" onChange={this.handleChange('displayName')} value={this.state.displayName} placeholder='Display name (optional)'/>
                            </div>
                        ) : ""}
                        
                        <div className="get-input">
                            <input className={"session-input" + (this.emailError ? " error" : "")} type="text" onChange={this.handleChange('email')} value={this.state.email} placeholder="name@work-email.com"/>
                            <p className={"feedback" + (this.emailError ? " error" : "")}>{<img className="triangleWarning" src={triangleWarning}></img>} {emailErrorMessages}</p>
                        </div>
                        <div className="get-input">
                            <input className={"session-input" + (this.passwordError ? " error" : "")} type="password" onChange={this.handleChange('password')} value={this.state.password} placeholder={"Password" + (formType === "signup" ? " (must be at least 6 characters)" : "")}/>
                            <p className={"feedback" + (this.passwordError ? " error" : "")}>{<img className="triangleWarning" src={triangleWarning}></img>} {passwordErrorMessages}</p>
                        </div>
                        <button onClick={this.handleSubmit}>{formType === "signup" ? "Sign Up" : "Sign In with Email"}</button>
                    </div>
                </form>
            </div>
        )
    }
}
