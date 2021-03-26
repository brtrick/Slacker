import React from "react"
import ChannelIndexItem from "./channel_index_item.jsx"

export default class ChannelIndex extends React.Component {
    constructor (props) {
        super(props);

        this.subscribe = this.subscribe.bind(this);
        this.unsubscribe = this.unsubscribe.bind(this);
    }

    componentDidMount () {
        this.props.fetchWorkspaceChannels (this.props.currentWorkspaceId);
    }

    subscribe (e) {
        const channelId = parseInt(e.currentTarget.dataset.id);
        this.props.subscribeChannel(this.props.currentUserId, channelId);
    }
    
    unsubscribe (e) {
        const channelId = parseInt(e.currentTarget.dataset.id);
        this.props.unsubscribeChannel(this.props.currentUserId, channelId);
    }

    render() {
        const channelIndexItems = this.props.channels.map ( (channel, idx) => {
            const isSubscriber = channel.subscriberIds.includes(this.props.currentUserId)
            return <ChannelIndexItem key={idx} element={channel} isSubscriber={isSubscriber}
                clickFunction={isSubscriber ? this.unsubscribe : this.subscribe}/>;
        });

        const numChannels = this.props.channels.length;

        return (
            <div className="index">
                <div className="header">
                    <h1>Channel browser</h1>
                    {/* <p>{numChannels} channels</p> */}
                </div>
                <div className="body">
                    {channelIndexItems}
                </div>
            </div>
        )
    }
}
