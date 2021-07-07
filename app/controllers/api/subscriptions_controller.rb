class Api::SubscriptionsController < ApplicationController
    def create
        subscription = Subscription.new(subscription_params)

        # if subscription.subscriber_id == currentUser && subscription.save
        if subscription.save!
            klass = Object.const_get subscription_params[:subscribable_type]
            @channel_id = subscription_params[:subscribable_id]
            @subscriber_ids = klass.find(@channel_id).subscribers.pluck(:id)
            render :show
        else
            render json: subscription.errors.full_messages, status: :unauthorized
        end
    end

    def destroy
        subscription = Subscription.find_by(subscription_params)
        Subscription.destroy(subscription.id)
        
        klass = Object.const_get subscription_params[:subscribable_type]
        @channel_id = subscription_params[:subscribable_id]
        @subscriber_ids = klass.find(@channel_id).subscribers.pluck(:id)
        render :show
    end

    private
    def subscription_params
        params.require(:subscription).permit(:subscriber_id, :subscribable_id, :subscribable_type)
    end
end