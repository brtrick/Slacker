import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";
import thunk from "redux-thunk";
//import logger from "redux-logger";

const defaultState = {
    entities: {
        users: {}
    },
    session:{}
}
const configureStore = (preLoadedState = defaultState) => {
    return createStore(rootReducer, preLoadedState, applyMiddleware(thunk));
    // return createStore(rootReducer, preLoadedState, applyMiddleware(thunk, logger));
}

export default configureStore;