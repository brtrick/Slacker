import React from "react"

export default class Workspace extends React.Component {
    render() {
        if (!Boolean(this.props.workspace)) return (<></>);
        return (
            <div className="workspace">
                <h1>{this.props.workspace.name}</h1>
            </div>
        )
    }
}