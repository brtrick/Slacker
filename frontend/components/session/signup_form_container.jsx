import { connect } from "react-redux";
import { signup, clearSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapSTP = ({ errors: {session: errors}}) => {
    return {
        errors: errors,
        formType: "signup"
    }
}

const mapDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    }
};

export default connect(mapSTP, mapDTP)(SessionForm);