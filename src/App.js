import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./containers/Login/Login";

class App extends Component {
    render() {
        return <Route path="/login" exact component={Login} />;
    }
}

export default App;