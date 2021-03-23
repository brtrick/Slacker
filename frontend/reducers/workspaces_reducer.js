import {
    RECEIVE_CURRENT_WORKSPACE,
    RECEIVE_USER_WORKSPACE,
    RECEIVE_WORKSPACES
} from '../actions/workspace_actions';

const defaultState = {};

const workspacesReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_WORKSPACE:
            return Object.assign({}, action.workspace.workspace, state);
        case RECEIVE_USER_WORKSPACE:
            return Object.assign({}, action.workspace.workspace);
        case RECEIVE_WORKSPACES:
            return Object.assign({}, action.workspaces, state);
        default:
            return state;
    }
}

export default workspacesReducer;