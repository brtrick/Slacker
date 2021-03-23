import React from "react";
import { Link, Redirect } from "react-router-dom"
import WorkspaceListItem from "./workspaceListItem"

export default class WorkspaceSelectionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: true};

        this.handleClick= this.handleClick.bind(this);
    }
    componentDidMount() {
        this.props.fetchUserWorkspaces(this.props.session.currentUserId);
    }

    componentWillUnmount() {
    }
    handleClick(e) {
        e.preventDefault();
        this.props.fetchUserWorkspace(this.props.session.currentUserId, e.target.dataset.id);
    }
    render() {
        if (Boolean(this.props.session.currentWorkspaceId)) return (<Redirect to="/" />);
        const workspaceListItems = this.props.workspaces.map( (ws, idx) => {
            return <WorkspaceListItem key={idx} workspace={ws} clickFunction={this.handleClick} />
        });
        const userName = this.props.currentUser.displayName !== "" ? 
                            this.props.currentUser.displayName :
                            this.props.currentUser.fullName;
        return (
            <div className="initial-form">
                <div className="initial-form-header">
                    <Link to='/'><img className="logo" src={slackerRGBUrl} /></Link>
                    <div className="nav-link">
                        <p>Welcome {userName}!</p> 
                        <Link to="/login" onClick={this.props.logout}>
                            Switch user?
                        </Link>
                    </div>
                </div>

                <form className="initial-form-body">
                    <h1 className="workspace-form-title">Select your Workspace</h1>
                    <ul>
                        {workspaceListItems}
                    </ul>
                </form>


            </div>
        )

    }
}