@channels.each do |channel|
    json.set! channel.id do
        json.partial! 'channel', channel: channel
        json.partial! 'channel_extended', channel: channel
    end
end