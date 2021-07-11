import * as MessageApiUtil from '../util/message_api_util';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const receiveMessage = (message) => {
    return {
        type: RECEIVE_MESSAGE,
        message
    }
}

export const createMessage = (message) => dispatch => {
    return MessageApiUtil.createMessage(message)
        .then(null, errors=>dispatch(receiveErrors(errors.responseJSON)))
}
// export const receiveWSMessage = (message) => dispatch => {
//     dispatch(receiveMessage(message))
// }