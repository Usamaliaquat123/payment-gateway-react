import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Login from "../containers/auth/Login/Login";
import Signup from './../containers/auth/Signup/Signup';
import Resetpass from './../containers/auth/Reset/Resetpass';
// import Dashboard from './../containers/home/index';

export default function AppNav() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/reset">
                    <Resetpass />
                </Route>
                <Route path="/">
                    <Login />
                </Route>

            </Switch>
        </Router>
    )
}

