import React from "react";
import { Link, Redirect } from "react-router-dom"


export default class WorkspaceSelectionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: true};

        this.handleClick= this.handleClick.bind(this);
    }
    componentDidMount() {
        this.props.fetchWorkspaces(this.props.session.currentUserId);
    }

    componentWillUnmount() {
    }
    handleClick(e) {
        e.preventDefault();
        this.props.fetchWorkspace((e.target.dataset.id));
    }
    render() {
        if (Boolean(this.props.session.currentWorkspaceId)) return (<Redirect to="/" />);
        const workspaceListItems = this.props.workspaces.map( (ws, idx) => {
            return <li key={idx} className="workspaceListItem" data-id={idx+1} onClick={this.handleClick}>{ws.name}</li>
        });

        return (
            <div className="workspace-selection-form-page">
                <div className="workspace-selection-form-header">
                    <Link to='/'><img className="logo" src={slackerRGBUrl} /></Link>
                </div>

                <form className="workspace-selection-form-body">
                    <h1>Select your Workspace</h1>
                    <ul>
                        {workspaceListItems}
                    </ul>
                </form>


            </div>
        )

    }
}