class Api::WorkspacesController < ApplicationController

    def index
        if params[:user_id]
            @workspaces = Workspace.joins(:subscribers).where(users: {id: params[:user_id]})
        else @workspaces = Workspace.all
        end
    end
    
    def show
        id = params[:id]
        @workspace = Workspace.includes(:subscribers).find(id)
        if params[:user_id]
            @channels = Channel.includes(:subscribers).where(workspace_id: id, users: {id: params[:user_id]})
        end
    end


        private
    def workspace_params
        params.require(:workspace).permit(:name)
    end
end