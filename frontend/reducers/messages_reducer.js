// import {
//     RECEIVE_MESSAGE,
//     RECEIVE_MESSAGES
// } from '../actions/channel_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';
import { RECEIVE_USER_WORKSPACE } from '../actions/workspace_actions'

const defaultState = {};

const messagesReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHANNEL:
            return Object.assign({}, action.channel.messages);
        case RECEIVE_MESSAGE:
            return Object.assign({}, state, {[action.message.id]: action.message});
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