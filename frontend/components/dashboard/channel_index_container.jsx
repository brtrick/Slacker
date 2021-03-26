import { connect } from "react-redux";
import {fetchWorkspaceChannels} from "../../actions/channel_actions"
import {subscribeChannel, unsubscribeChannel} from "../../actions/subscription_actions"
import ChannelBrowser from "./channel_index";

const mapSTP = (state) => {
    return {
        channels: getFilteredChannels(state, "private", false),
        currentWorkspaceId: state.session.currentWorkspaceId,
        currentUserId:  state.session.currentUserId
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchWorkspaceChannels: (workspaceId) => dispatch(fetchWorkspaceChannels(workspaceId)),
        subscribeChannel: (userId, channelId) => dispatch(subscribeChannel(userId, channelId)),
        unsubscribeChannel: (userId, channelId) => dispatch(unsubscribeChannel(userId, channelId))
        // clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}

export default connect(mapSTP, mapDTP)(ChannelBrowser);