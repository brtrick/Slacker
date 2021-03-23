json.extract! dm, :id
json.subscriberIds dm.subscribers.merge(Subscription.active).pluck(:id)
json.messageIds dm.messages.pluck(:id)