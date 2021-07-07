import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ActionCable from 'actioncable';
import App from "./app";


function Root({ store }) {
    let wsUrl;
    if (process.env.NODE_ENV !== "production") 
        wsUrl = "ws://localhost:3000/cable";
    else
        wsUrl = "ws://my-slacker.herokuapp.com/cable";
    const AppCable = {};
    AppCable.cable = ActionCable.createConsumer(wsUrl);
    return (
        <Provider store={store}>
            <HashRouter>
                    <App AppCable={AppCable}/>
            </HashRouter>
        </Provider>
    )
}

export default Root;