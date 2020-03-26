import React , {Component} from "react";
import  "../../styles/app.css"
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

class Layout extends Component {

    render () {

        let link;

        if(this.props.isAuthenticated) {
            link = (
            <form className="form-inline">
            <NavLink to="/post-create" className="btn btn-warning btn_nav">
                Add Post
            </NavLink>
            <NavLink to="/logout" className="btn btn-dark my-2 my-sm-0">
                Logout
            </NavLink>
            </form>
            )
        } else {
            link = (
                <div>
                    <NavLink to="/auth" className="btn btn-dark my-2 my-sm-0">
                Sing in
            </NavLink>
                </div>
            )
        }

        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container nav_bar">
                        <NavLink to="/" className="navbar-brand">
                            BlogApp
                        </NavLink>
                        {link}
                    </div>
                </nav>
                <div className="container">
                    <main>
                    {this.props.children}
                    </main>
                </div>                
            </div>
         )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Layout);