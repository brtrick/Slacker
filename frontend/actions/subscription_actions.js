import * as SubscriptionApiUtil from '../util/subscription_api_util';
export const RECEIVE_NEW_SUBSCRIPTION_STATUS = 'RECEIVE_NEW_SUBSCRIPTION';
export const REMOVE_SUBSCRIPTION = 'REMOVE_SUBSCRIPTION';
export const RECEIVE_SUBSCRIPTION_ERRORS = 'RECEIVE_SUBSCRIPTION_ERRORS';
export const CLEAR_SUBSCRIPTION_ERRORS = 'CLEAR_SUBSCRIPTION_ERRORS';

const receiveNewSubscriptionStatus = (subscription) => {
    return {
        type: RECEIVE_NEW_SUBSCRIPTION_STATUS,
        subscription
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_SUBSCRIPTION_ERRORS,
        errors
    }
}

export const subscribeChannel = (userId, channelId) => dispatch => {
    return SubscriptionApiUtil.subscribeChannel(userId, channelId)
        .then(subscription => dispatch(receiveNewSubscriptionStatus(subscription)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const unsubscribeChannel = (userId, channelId) => dispatch => {
    return SubscriptionApiUtil.unsubscribeChannel(userId, channelId)
        .then(subscription => dispatch(receiveNewSubscriptionStatus(subscription)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
};