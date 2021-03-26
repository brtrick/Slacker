import React from "react"
import { NavLink, Link } from "react-router-dom";
import ChannelListContainer from "./channel_list_container";
import WorkspaceContainer from "./workspace_container";

export default class SideNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {
                channel: null,
                dm: null
            }
        };

        this.selectItem = this.selectItem.bind(this);
    }

    selectItem (type, id) {
        type==="channel" ? (
            this.setState({
                selected: {
                    channel: id,
                    dm: null
                }
            })
        ) : (
            this.setState({
                selected: {
                    channel: null,
                    dm: id
                }
            })
        )

    }

    render() {
        return (
            <div className="side-nav-bar">
                <div className="side-nav-bar-header">
                    <WorkspaceContainer />
                </div>
                <Link to="/dashboard/browse-channels"><h1>Browse Channels</h1></Link>
                <ChannelListContainer selected={this.state.selected.channel} 
                    selectItem={this.selectItem} dm={false}/>
                <ChannelListContainer selected={this.state.selected.dm}
                    selectItem={this.selectItem} dm={true}/>
            </div>
        )
    }
}