import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Chat from "./components/Chat";
import Join from "./components/Join";

const App = () => (
    <Switch>
        <Route path="/" exact component={Join} />
        <Route Path="/chat" component={Chat}/>
    </Switch>
);

export default  App;