import React from "react";
// import ActionCable from "actioncable";
import ChannelListItem from "./channel_list_item";

export default class ChannelList extends React.Component {
    componentDidMount () {
        const channels = Object.values(this.props.dm ? this.props.dms : this.props.channels);
        for (let i = 0; i < channels.length; i++) {
            this.wsSubscriptions[channels[i].id] =  
                this.props.AppCable.cable.subscriptions.create({
                    channel: 'ChannelsChannel',
                    slack_channel: channels[i].id
                },
                {
                    received: this.handleReceived
                })
        }
    }
    
    constructor (props) {
        super(props);

        this.state = {
            visible: false,
        }
        this.wsSubscriptions = {};
        this.handleClick = this.handleClick.bind(this);
        this.handleReceived = this.handleReceived.bind(this);
        this.toggleChannels = this.toggleChannels.bind(this);
    }

    toggleChannels () {
        this.setState({
            visible: !this.state.visible
        })
    }

    handleClick (e) {
        e.preventDefault();
        const id = parseInt(e.currentTarget.dataset.id);
        this.props.selectItem((this.props.dm ? "dm" : "channel"), id);
        this.props.fetchChannel(id)
            .then(this.props.history.push(`/dashboard/channels/${id}`));
    }

    handleReceived(msg) {
        console.log(msg)
        if (typeof msg === "string") this.props.receiveMessage(JSON.parse(msg));
    }
    
    render() {
        const dm = this.props.dm;
        const channels = (dm ? this.props.dms : this.props.channels);
        const selected = this.props.selected;
        
        const channelListItems = Object.values(channels).map( (channel) => {
            return <ChannelListItem key={channel.id} channel={channel} clickFunction={this.handleClick} 
                selected={selected} dm={dm} users={this.props.users}
                currentUserId={this.props.currentUserId}/>
        });
        
        const visible = this.state.visible;
        
        return (
            <div className="channel-list">
                {/* <ActionCable channel="ChannelsChannel" onReceived={this.handleReceived}> New messages</ActionCableConsumer> */}
                <span onClick={this.toggleChannels}>
                    <h1><div className={visible ? "down-arrow" : "left-arrow"}></div>{(dm ? "Direct Messages" : "Channels")}</h1>
                </span>
                <ul className={visible ? "" : "hidden"}>
                    {channelListItems}
                </ul>
                {(!visible && Boolean(selected) && channels[selected]) ? (
                    <ul>
                        <ChannelListItem key={selected} channel={channels[selected]} clickFunction={this.handleClick}
                            selected={selected} dm={dm} users={this.props.users}
                            currentUserId={this.props.currentUserId} />
                    </ul>
                ) : (<></>)}
            </div>
        );
    }

}