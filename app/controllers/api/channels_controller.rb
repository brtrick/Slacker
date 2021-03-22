class Api::ChannelsController < ApplicationController

    def index
        # if params[workspace_id]
        #     @channels = Channel.where(workspace_id: params[:workspace_id])
        #     @channels = @channels.select( subscriber: params[:subscriber_id])
        #     if params[user_id]
        # elsif channel_params.subscriber_id
        #     @channels = Channel.find_by(subscribers: channel_params.subscriber_id)
        # end
    end
    
    private
    def channel_params
        params.require(:channel).permit(:name, :description, :workspace_id, :private, :dm)
    end
end