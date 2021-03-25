import {
    RECEIVE_CHANNEL,
    RECEIVE_WORKSPACE_CHANNELS
} from '../actions/channel_actions';
import { RECEIVE_USER_WORKSPACE } from '../actions/workspace_actions'

const defaultState = {};

const channelsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_WORKSPACE:
            return Object.assign({}, action.workspace.channels);
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, { [action.channel.id]: action.channel });
        case RECEIVE_WORKSPACE_CHANNELS:
            return Object.assign({}, state, action.channels);
        default:
            return state;
    }
}

export default channelsReducer;