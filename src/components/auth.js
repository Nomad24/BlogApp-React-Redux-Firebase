import React, {Component} from "react";
import "../styles/app.css";
import {connect} from "react-redux";
import {auth} from "../../src/store/actions/auth";

class Auth extends Component {


    state = {
        email: '',
        password: '',
        returnSecureToken: true
    }

    getValue = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({
            [nam]: val
        })
    }

    clearState = () => {
        this.email.value = "";
        this.password.value = "";
    }
    
    loginHandler = async () => {
        this.props.auth(
            this.state.email,
            this.state.password,
            true
        )
    }

    registerHandler = async () => {
        this.props.auth(
            this.state.email,
            this.state.password,
            false
        )
    }

    submitHandler = (e) => {
        e.preventDefault();
    }


    render() {
        return(
            <div className="container Auth">
                <div>
                <form className="AuthForm" onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email Address</label>
                        <input required onChange={(e) => this.getValue(e)} name="email" ref={(e) => this.email = e} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input required onChange={(e) => this.getValue(e)} name="password" ref={(e) => this.password = e} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                        <button className="btn btn-primary" onClick={this.loginHandler}>Sing In</button>
                        <button className="btn btn-primary" onClick={this.registerHandler}>Sing Up</button>
                </form>
                </div>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
    }
}

export default connect(null, mapDispatchToProps)(Auth);