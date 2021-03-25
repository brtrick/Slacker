import * as ChannelApiUtil from '../util/channel_api_util';
export const RECEIVE_WORKSPACE_CHANNELS = 'RECEIVE_WORKSPACE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';

const receiveChannel = (channel) => {
    return {
        type: RECEIVE_CHANNEL,
        channel
    }
}

const receiveWorkspaceChannels = (channels) => {
    return {
        type: RECEIVE_WORKSPACE_CHANNELS,
        channels
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_CHANNEL_ERRORS,
        errors
    }
}

export const fetchChannel = (channel_id) => (dispatch) => {
    return (
        ChannelApiUtil.fetchChannel(channel_id)
            .then((channel) => dispatch(receiveChannel(channel)),
                errors => dispatch(receiveErrors(errors.responseJSON)))
    )
};

export const fetchWorkspaceChannels = (workspace_id) => (dispatch) => {
    return (
        ChannelApiUtil.fetchWorkspaceChannels(workspace_id)
            .then((channels) => dispatch(receiveWorkspaceChannels(channels)),
                errors => dispatch(receiveErrors(errors.responseJSON)))
    )
};