import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import { fetchChannelMessages } from "../../actions/channel_actions";
import ChannelList from "./channel_list";

const mapSTP = ({ entities: { channels, dms, users }, session: {currentUserId} }) => {

    return {
        users: users,
        channels: channels,
        dms:    dms,
        currentUserId: currentUserId
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchChannelMessages: (channel_id, message_id) => dispatch(fetchChannelMessages(channel_id, message_id)),
    }
}

export default withRouter(connect(mapSTP, mapDTP)(ChannelList));