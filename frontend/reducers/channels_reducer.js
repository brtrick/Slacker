import {
    RECEIVE_CHANNEL,
    RECEIVE_CHANNELS
} from '../actions/channel_actions';

const defaultState = {};

const channelsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, { [action.channel.id]: action.channel })
        case RECEIVE_CHANNELS:
            return Object.assign({}, action.channels, state)
        default:
            return state;
    }
}

export default channelsReducer;