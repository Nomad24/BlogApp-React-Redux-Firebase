import React, {Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {Link} from "react-router-dom"



class Button extends Component {

    postDelete = () => {
        axios.delete(`https://blog-app-34387.firebaseio.com/posts/${this.props.id}.json`)
        .then(function () {
            alert("Post was Deleted");
            location.assign("/");
        })
    }

    render() {

        let btn;

        if(this.props.isAuthenticated){
            btn = (
            <div>
                <Link to={{
                    pathname: "/post-create/edit",
                    state: {
                        id: this.props.id
                    }
                }} className="btn btn-info">Update</Link>
                <button type="button" className="btn btn-danger" onClick={this.postDelete}>Delete</button>
            </div>
            )
        } else {
            btn = (
                <div></div>
            )
        }

        return (
            <div>
                {btn}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Button);
