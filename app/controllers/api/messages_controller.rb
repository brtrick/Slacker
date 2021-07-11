class Api::MessagesController < ApplicationController

    def create
        @msg = Message.new(message_params)
        if @msg.save
            ActionCable.server.broadcast "slack_channel_#{@msg.channel_id}", 
                ApplicationController::render(partial: "/api/messages/message.json.jbuilder", locals: {message: @msg})
        else
            render json: @msg.errors.full_messages, status: :unprocessable_entity
        end
    end

    private
    def message_params
        params.require(:message).permit(:body, :author_id, :channel_id)
    end

end