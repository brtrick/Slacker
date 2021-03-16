class Api::SessionsController < ApplicationController
    def create
            @user = User.find_by_credentials(
                params[:user][:email],
                params[:user][:password]
            )

            if @user
                login!(@user)
                render :show
            else
                render json: ["Credentials Invalid"], status: :unprocessable_entity
            end
        end

        def destroy
            if current_user
                logout
                render json: {}
            else
                render json: ["no current user"], status: :not_found
            end
        end
    end
end
