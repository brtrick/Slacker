json.partial! 'workspace', workspace: @workspace
json.channelIds @workspace.channels.pluck(:id)
json.memberIds @workspace.subscribers.pluck(:id)
json.adminIds @workspace.subscribers.merge(Subscription.admin).pluck(:id)