import React, {Component} from "react";
import Layout from "../hoc/layout/layout";
import {Route, Switch, Redirect, withRouter} from "react-router-dom";
import PostList from "./postlist";
import Auth from "./auth";
import PostCreate from "./postcreate";
import PostDetails from "./postdetails";
import {connect} from "react-redux";
import Logout from "./logout";
import {autoLogin} from "../../src/store/actions/auth";

import "../styles/app.css";

class App extends Component {

    componentDidMount(){
        this.props.autoLogin()
    }

    render() {

        let routes = (
            <Switch>
                <Route path="/posts/:id" component={PostDetails} />
                <Route path="/auth" component={Auth} />
                <Route path="/" exact component={PostList} />
            </Switch>
        )

        if(this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/post-create" component={PostCreate} />
                    <Route path="/posts/:id" component={PostDetails} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/" exact component={PostList} />
                    <Redirect to="/" />
                </Switch>
            )
        }

        return (
            <Layout>
                {routes}
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        autoLogin: () => dispatch(autoLogin())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));