import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Workspace from "./workspace"

const mSTP = state => ({
    workspace: state.entities.workspaces[state.session.currentWorkspaceId]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Workspace)