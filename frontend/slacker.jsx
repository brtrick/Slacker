import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from "./store/store";
import * as APIUtil from "./actions/workspace_actions";
import * as SessionAPIUtil from "./actions/session_actions";
import * as WorkspaceAPIUtil from "./util/workspace_api_util";
import * as Selectors from  "./reducers/selectors"


document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: {
                currentUserId: window.currentUser.id
            }
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    }
    else store = configureStore();
    
    if (process.env.NODE_ENV !== "production") {
        window.store = store;
        // window.fetchWorkspace = APIUtil.fetchWorkspace
        // window.fetchWorkspaces = APIUtil.fetchWorkspaces
        window.logout = SessionAPIUtil.logout
        window.getFilteredChannels = Selectors.getFilteredChannels
        window.getChannelsWithSubstring = Selectors.getChannelsWithSubstring
        // window.loadWorkspace = WorkspaceAPIUtil.fetchWholeWorkspace
    }


    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});