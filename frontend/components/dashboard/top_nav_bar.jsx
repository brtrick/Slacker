import React from "react"

export default class TopNavBar extends React.Component {
    render () {
        return (
            <div className="top-nav-bar">
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
    }
}