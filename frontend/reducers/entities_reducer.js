import {combineReducers} from "redux"
import usersReducer from "./users_reducer"
import workspacesReducer from "./workspaces_reducer"
import channelsReducer from "./channels_reducer"
import dmsReducer from "./dms_reducer"
import messagesReducer from "./messages_reducer"

export default combineReducers ({
    users: usersReducer,
    workspaces: workspacesReducer,
    channels: channelsReducer,
    dms: dmsReducer,
    messages: messagesReducer
});
