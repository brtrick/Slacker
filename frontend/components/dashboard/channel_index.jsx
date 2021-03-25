import React from "react"
import ChannelIndexItem from "./channel_index_item.jsx"

export default class ChannelIndex extends React.Component {
    constructor (props) {
        super(props);

        this.subscribe = this.subscribe.bind(this);
    }

    componentDidMount () {
        this.props.fetchWorkspaceChannels (this.props.currentWorkspaceId);
    }

    subscribe (e) {
        const id = parseInt(e.currentTarget.dataset.id);
        console.log("id");
    }

    render() {
        const channelIndexItems = this.props.channels.map ( (channel, idx) => {
            return <ChannelIndexItem key={idx} element={channel} clickFunction={this.subscribe} 
                isSubscriber={channel.subscriberIds.includes(this.props.currentUserId)}/>;
        });

        const numChannels = this.props.channels.length;

        return (
            <div className="index">
                <div className="index-header">
                    <h1>Channel browser</h1>
                    <p>{numChannels} channels</p>
                </div>
                    {channelIndexItems}
            </div>
        )
    }
}
