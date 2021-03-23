class Api::WorkspacesController < ApplicationController

    def index
        if params[:user_id]
            @workspaces = Workspace.joins(:subscribers).where(users: {id: params[:user_id]})
        else @workspaces = Workspace.all
        end
    end
    
    def show
        id = params[:id]
        @workspace = Workspace.find(id)
    end


        private
    def workspace_params
        params.require(:workspace).permit(:name)
    end
end