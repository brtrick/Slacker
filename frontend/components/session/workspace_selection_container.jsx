import { connect } from "react-redux";
import { fetchUserWorkspaces, fetchUserWorkspace } from "../../actions/workspace_actions";
import { logout } from "../../actions/session_actions";
import WorkspaceSelectionForm from "./workspace_selection_form";

const mapSTP = ({ entities: {workspaces}, entities: {users}, session}) => {
    
    return {
        currentUser: users[session.currentUserId],
        workspaces: Object.values(workspaces),
        session: session
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchUserWorkspaces: user_id => dispatch(fetchUserWorkspaces(user_id)),
        fetchUserWorkspace:  (user_id, workspace_id) => dispatch(fetchUserWorkspace(user_id, workspace_id)),
        logout: () => dispatch(logout())
    }
}

export default connect(mapSTP, mapDTP)(WorkspaceSelectionForm);