import * as WorkspaceApiUtil from '../util/workspace_api_util';
export const RECEIVE_CURRENT_WORKSPACE = 'RECEIVE_CURRENT_WORKSPACE';
export const RECEIVE_USER_WORKSPACE = 'RECEIVE_USER_WORKSPACE';
export const RECEIVE_WORKSPACES = 'RECEIVE_WORKSPACES';
export const RECEIVE_WORKSPACE_ERRORS = 'RECEIVE_WORKSPACE_ERRORS';


const receiveCurrentWorkspace = (workspace) => {
    return {
        type: RECEIVE_CURRENT_WORKSPACE,
        workspace
    }
}

const receiveUserWorkspace = (workspace) => {
    return {
        type: RECEIVE_USER_WORKSPACE,
        workspace
    }
}

const receiveWorkspaces = (workspaces) => {
    return {
        type: RECEIVE_WORKSPACES,
        workspaces
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_WORKSPACE_ERRORS,
        errors
    }
}

export const fetchWorkspace = (workspace_id) => (dispatch) => {
    return (
        WorkspaceApiUtil.fetchWorkspace(workspace_id)
            .then((workspace) => dispatch(receiveCurrentWorkspace(workspace)),
                errors => dispatch(receiveErrors(errors.responseJSON)))
    )
};

export const fetchUserWorkspace = (user_id, workspace_id) => (dispatch) => {
    return (
        WorkspaceApiUtil.fetchUserWorkspace(workspace_id, user_id)
            .then((workspace) => dispatch(receiveUserWorkspace(workspace)),
                errors => dispatch(receiveErrors(errors.responseJSON)))
    )
};

export const fetchUserWorkspaces = (user_id) => (dispatch) => {
    return (
        WorkspaceApiUtil.fetchUserWorkspaces(user_id)
            .then((workspaces) => dispatch(receiveWorkspaces(workspaces)),
                errors => dispatch(receiveErrors(errors.responseJSON)))
    )
};