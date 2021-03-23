import {
    RECEIVE_DM,
    RECEIVE_DMS
} from '../actions/channel_actions';
import { RECEIVE_USER_WORKSPACE } from '../actions/workspace_actions'

const defaultState = {};

const dmsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_WORKSPACE:
            return Object.assign({}, action.workspace.dms);
        case RECEIVE_DM:
            return Object.assign({}, state, { [action.channel.id]: action.channel });
        case RECEIVE_DMS:
            return Object.assign({}, action.channels, state);
        default:
            return state;
    }
}

export default dmsReducer;