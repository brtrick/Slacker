import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../../util/route_util.jsx";
import TopNavBarContainer from "./top_nav_bar";
import SideNavBarContainer from "../side_nav_bar/side_nav_bar_container";
import ChannelIndexContainer from "./channel_index_container";
import ChannelDisplayContainer from "./channel_display_container";

const Dashboard = () => (
    <div>
        <TopNavBarContainer />
        <SideNavBarContainer />
        <div className="dashboard-content">
            <Switch>
                <ProtectedRoute path="/dashboard/browse-channels" exact component={ChannelIndexContainer}/>
                <ProtectedRoute path="/dashboard/channels/:id" exact component={ChannelDisplayContainer} />
            </Switch>
        </div>
    </div>
);

export default Dashboard;