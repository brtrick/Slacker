json.workspace do
    json.set! @workspace.id do
        json.partial! 'workspace', workspace: @workspace
        json.channelIds @workspace.channels.pluck(:id)
        json.memberIds @workspace.subscribers.pluck(:id)
        json.adminIds @workspace.subscribers.merge(Subscription.admin).pluck(:id)
    end
end

if @channels
    json.channels do 
        @channels.channel.each do |channel|
            json.set! channel.id do
                json.partial! '/api/channels/channel', channel: channel
                json.partial! '/api/channels/channel_extended', channel: channel             
            end
        end
    end
    json.dms do 
        @channels.dm.each do |dm|
            json.set! dm.id do
                json.partial! '/api/channels/dm', dm: dm
            end
        end
    end
    json.users do
        @channels.dm.each do |dm|
            dm.subscribers.merge(Subscription.active).each do |subscriber|
                json.set! subscriber.id do
                    json.partial! '/api/users/user_short', user: subscriber
                end
            end
        end
    end
end