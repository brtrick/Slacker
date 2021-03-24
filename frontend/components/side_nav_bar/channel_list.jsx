import React from "react"
import ChannelListItem from "./channel_list_item";

export default class ChannelList extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            visible: false,
        }

        this.handleClick = this.handleClick.bind(this);
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
        // console.log(`Channel id is ${id}`);
        // this.props.fetchChannelMessages
        //Link to component
    }

    
    render() {
        const dm = this.props.dm;
        const channels = (dm ? this.props.dms : this.props.channels);
        const selected = this.props.selected;
        
        const channelListItems = Object.values(channels).map( (channel, idx) => {
            return <ChannelListItem key={idx} channel={channel} clickFunction={this.handleClick} 
                selected={selected} dm={dm} users={this.props.users}
                currentUserId={this.props.currentUserId}/>
        });
        
        const visible = this.state.visible;
        return (
            <div className="channel-list">
                <span onClick={this.toggleChannels}>
                    <h1><div className={visible ? "down-arrow" : "left-arrow"}></div>{(dm ? "Direct Messages" : "Channels")}</h1>
                </span>
                <ul className={visible ? "" : "hidden"}>
                    {channelListItems}
                </ul>
                {(!visible && Boolean(selected)) ? (
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