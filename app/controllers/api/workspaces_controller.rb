class Api::WorkspacesController < ApplicationController

    def index
        @workspaces = Workspace.all
    end
    
    def show
        @workspace = Workspace.find(params[:workspace][:id])
        @channels = Workspace.where()
    end


        private
    def channel_params
        params.require(:workspace).permit(:name)
    end
end