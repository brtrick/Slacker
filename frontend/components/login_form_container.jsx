import {connect} from "react-redux";
import { login, clearSessionErrors } from "../actions/session_actions";
import SessionForm from "./session_form";

const mapSTP = ({errors: {session: errors}}) => {
    return {
        errors: errors,
        formType: "login"
    }
}

const mapDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}

export default connect(mapSTP, mapDTP)(SessionForm);