export const subscribeChannel = (userId, channelId) => (
    $.ajax({
        method: 'POST',
        url: '/api/subscriptions',
        data: { 
            subscription: {
                subscriber_id: userId,
                subscribable_id: channelId,
                subscribable_type: "Channel"
            }
         }
    })
);

export const unsubscribeChannel = (userId, channelId) => (
    $.ajax({
        method: 'DELETE',
        url: '/api/subscriptions/1',
        data: { 
            subscription: {
                subscriber_id: userId,
                subscribable_id: channelId,
                subscribable_type: "Channel"
            }
         }
    })
);