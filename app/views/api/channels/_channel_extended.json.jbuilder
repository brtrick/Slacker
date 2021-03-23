json.subscriberIds channel.subscribers.merge(Subscription.active).pluck(:id)
json.pendingSubscriberIds channel.subscribers.merge(Subscription.pending).pluck(:id)
json.messageIds channel.messages.pluck(:id)