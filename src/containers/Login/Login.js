import React from "react";
import { Input, Button, Form } from "semantic-ui-react";
import * as actionTypes from "./ActionTypes";
import { connect } from "react-redux";
import { Component } from "react";

class Login extends Component {
    state = {
        username: "",
        password: ""
    }
    handleLogin = (e, values) => {
        e.preventDefault();
        this.props.onLogin(this.state.username, this.state.password);
    }
    handleChange = (e, data) => {
        this.setState({
            [data.name]: data.value
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.props.handleLogin}>
                    <Input onChange={this.handleChange} name="username" value={this.state.username} placeholder="User name" />
                    <Input onChange={this.handleChange} name="password" placeholder="Password" />
                    <Button primary> Login </Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (username, password) => dispatch({ type: actionTypes.LOGIN, username: username, password: password })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);