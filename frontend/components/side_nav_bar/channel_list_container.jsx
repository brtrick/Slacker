import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import { fetchChannelMessages } from "../../actions/channel_actions";
import ChannelList from "./channel_list";
import {getCurrentUsersChannels, getFilteredChannelsObject} from "../../reducers/selectors"

// dms: getCurrentUsersChannels(state).filter(channel => (channel.dm)),
const mapSTP = state => {
    const channels = getCurrentUsersChannels(state);
    return {
        users: state.entities.users,
        channels: getFilteredChannelsObject(channels, "dm", false),
        dms: getFilteredChannelsObject(channels, "dm", true),
        currentUserId: state.session.currentUserId
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchChannelMessages: (channel_id, message_id) => dispatch(fetchChannelMessages(channel_id, message_id)),
    }
}

export default withRouter(connect(mapSTP, mapDTP)(ChannelList));