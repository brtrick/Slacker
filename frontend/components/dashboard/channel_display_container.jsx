import { connect } from "react-redux";
import {fetchChannel} from "../../actions/channel_actions";
import { createMessage } from "../../actions/message_actions"; 
import ChannelDisplay from "./channel_display"

const mapSTP = ({ entities: { users, channels, messages }, session: {currentUserId} }, ownProps) => {
    const channel = channels[ownProps.match.params["id"]];

    const channelName = channel.name
    // const channelName = channel.dm ? channel.Name
    return {
        users,
        channelName,
        channelId: ownProps.match.params["id"],
        messages: Object.values(messages),
        currentUserId
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchChannel: (channel_id) => dispatch(fetchChannel(channel_id)),
        createMessage: message => dispatch(createMessage(message))
        // clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}

export default connect (mapSTP, mapDTP)(ChannelDisplay);