import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session_actions';
import { RECEIVE_CURRENT_WORKSPACE } from '../actions/workspace_actions';

const _nullSession = {
    currentUserId: null,
    currentWorkspaceId: null
}

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {
                currentUserId: action.user.id
            });
        case RECEIVE_CURRENT_WORKSPACE:
            return Object.assign({}, state, {
                currentWorkspaceId: action.workspace.id
            });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
}
export default sessionReducer;