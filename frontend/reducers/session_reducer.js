import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session_actions';
import { RECEIVE_USER_WORKSPACE } from '../actions/workspace_actions';

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
        case RECEIVE_USER_WORKSPACE:
            return Object.assign({}, state, {
                currentWorkspaceId: parseInt(Object.keys(action.workspace.workspace)[0])
            });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
}
export default sessionReducer;