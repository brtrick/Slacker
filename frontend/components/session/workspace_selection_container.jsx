import { connect } from "react-redux";
import { fetchWorkspaces, fetchWorkspace } from "../../actions/workspace_actions";
import { logout } from "../../actions/session_actions";
import WorkspaceSelectionForm from "./workspace_selection_form";

const mapSTP = ({ entities: {workspaces}, session}) => {
    
    return {
        workspaces: Object.values(workspaces),
        session: session
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchWorkspaces: user_id => dispatch(fetchWorkspaces(user_id)),
        fetchWorkspace:  workspace_id => dispatch(fetchWorkspace(workspace_id)),
        logout: () => dispatch(logout())
    }
}

export default connect(mapSTP, mapDTP)(WorkspaceSelectionForm);