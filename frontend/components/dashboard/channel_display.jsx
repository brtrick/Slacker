import React from "react";
import MessageItem from "./messageItem"

class ChannelDisplay extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            msg: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchChannel(this.props.match.params["id"])
    // }

    handleChange(e) {
        this.setState({msg: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createMessage({body: this.state.msg, author_id: this.props.currentUserId, channel_id: this.props.channelId});
    }
    render () {
        const messages = this.props.messages; 
        if (messages.length === 0) {
            return null;
        }
        const messageListItems = messages.map ((message) => {
            return <MessageItem key={message.id} message={message} author={this.props.users[message.authorId]}/>
        })

        return (
            <>
                <div className = "messagesDisplay">
                    {messageListItems}
                </div>
                <form className="message-post-form" onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.msg} placeholder={`Message #${this.props.channelName}`} />
                    <button type="submit">Post</button>
                </form>
            </>
        )
    }
}
export default ChannelDisplay;