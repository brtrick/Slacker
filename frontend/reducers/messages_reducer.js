import {
    RECEIVE_MESSAGE,
    RECEIVE_MESSAGES
} from '../actions/channel_actions';
import { RECEIVE_USER_WORKSPACE } from '../actions/workspace_actions'

const defaultState = {};

const messagesReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        // case RECEIVE_USER_WORKSPACE:
        //     return Object.assign({}, action.workspace.channels);
        // case RECEIVE_MESSAGE:
        //     return Object.assign({}, state, { [action.message.id]: action.channel });
        // case RECEIVE_MESSAGES:
        //     return Object.assign({}, action.messages, state);
        default:
            return state;
    }
}

export default messagesReducer;