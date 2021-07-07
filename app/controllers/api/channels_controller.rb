

class Api::ChannelsController < ApplicationController

    def index
        @channels = Channel.includes(:subscribers, :messages).where(workspace_id: params[:workspace_id])
    end

    def show
        id = params[:id].to_i
        @channel = Channel.includes(:subscribers, :messages).find(id)
        # @subscriber_ids = User.joins(:subscribed_channels).where(channels: {id: 1})
        # @pending_ids = @subscriber_ids.merge(Subscription.pending).map{|ele| ele.id}
        # @subscriber_ids = @subscriber_ids.map{|ele| ele.id} - @pending_ids
        # @message_ids = Message.where(channel: id)
        ActionCable.server.broadcast "slack_channel_#{@channel.id}", msg: "Clicked on channel #{@channel.id}!"
        # head :ok
    end

    private
    def channel_params
        params.require(:channel).permit(:name, :description, :topic, :workspace_id, :private, :dm)
    end
end