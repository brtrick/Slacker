import { connect } from "react-redux";
import {fetchWorkspaceChannels} from "../../actions/channel_actions"
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
        fetchWorkspaceChannels: (workspace_id) => dispatch(fetchWorkspaceChannels(workspace_id))
        // clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}

export default connect(mapSTP, mapDTP)(ChannelBrowser);