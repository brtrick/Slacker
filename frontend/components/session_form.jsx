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
            full_name: "",
            display_name: "", 
            email: "",
            password: "",
            emailErrorMessage:  "",
            passwordErrorMessage: ""
        };
        this.emailError = false;
        this.passwordError = false;
        this.submit = false;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (field) {
        return (e) => {
            if (this.submit) {
                this[field+'Error'] = false;
                this.processErrors(field, e.target.value);
            }
            this.setState({[field]: e.target.value});  
        };
    }
    
    processErrors(field, content) {
        if (content === "") {
            this[field + 'Error'] = true;
            this.setState({ [field + 'ErrorMessage']: `Please fill in your ${field}.` });
        }
        else if (field === "email" && !emailValid(content)) {
            this.emailError = true;
            this.setState({ emailErrorMessage: "Sorry, but that email is invalid." });
        }
    }

    handleSubmit (e) {
        e.preventDefault();
        this.submit = true;
        this.processErrors("email", this.state.email);
        this.processErrors("password", this.state.password);
        
        if (!this.emailError && !this.passwordError) {
            const user = Object.assign({}, this.state.user);
            this.props.processForm(user);
        }
    }

    render () {
        const formType = this.props.formType;
        const serverErrorMessages = this.props.errors.map(
            (error, idx) => (<li key={idx}>{error}</li>)
        )
        
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

                    {/* <div className={"session-errors" + (serverErrorMessages.length !== 0) ? "" : " hidden"}> */}
                    <div className="server-errors">
                            <ul className="server-errors-list">
                                {serverErrorMessages}
                            </ul>
                    </div>

                    <div className="form-inputs">
                        {(formType === "signup") ? (
                            <input type="text" onChange={this.handleChange('full_name')} value={this.state.full_name} placeholder='Full name (e.g., "John Smith")'/>
                        ) : ""}
                        {(formType === "signup") ? (
                            <input type="text" onChange={this.handleChange('display_name')} value={this.state.display_name} placeholder='Display name (optional)'/>

                        ) : ""}
                        
                        <div className="get-email">
                            <input className={"email-input" + (this.emailError ? " error" : "")} type="text" onChange={this.handleChange('email')} value={this.state.email} placeholder="name@work-email.com"/>
                            <p className={"email-feedback" + (this.emailError ? " error" : "")}>{<img className="triangleWarning" src={triangleWarning}></img>} {this.state.emailErrorMessage}</p>
                        </div>
                        <div className="get-password">
                            <input className={"password-input" + (this.passwordError ? " error" : "")} type="password" onChange={this.handleChange('password')} value={this.state.password} placeholder="Password"/>
                            <p className={"password-feedback" + (this.passwordError ? " error" : "")}>{<img className="triangleWarning" src={triangleWarning}></img>} {this.state.passwordErrorMessage}</p>
                        </div>
                        <button onClick={this.handleSubmit}>{formType === "signup" ? "Sign Up" : "Sign In with Email"}</button>
                    </div>
                </form>
            </div>
        )
    }
}
