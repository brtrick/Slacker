import {combineReducers} from "redux"
import usersReducer from "./users_reducer"
import workspacesReducer from "./workspaces_reducer"
import channelsReducer from "./channels_reducer"

export default combineReducers ({
    users: usersReducer,
    workspaces: workspacesReducer,
    channels: channelsReducer
});
