class ChannelsChannel < ApplicationCable::Channel
  def subscribed
    # debugger
     stream_from "slack_channel_#{params[:slack_channel]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
