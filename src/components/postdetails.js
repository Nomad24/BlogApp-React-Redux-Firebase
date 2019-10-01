import React, {Component} from "react";
import "../styles/app.css";
import Loader from "./loader";
import Button from "./button";
import {fetchPostById} from "../../src/store/actions/post";
import {connect} from "react-redux"


class PostDetails extends Component {


    componentDidMount() {
        this.props.fetchPostById(this.props.match.params.id)
    }

    renderPostDetails() {
        return (
        <div className="container">
            <div className="card Postdetails">
                <img src ={this.props.post.url}
                className = "card-img-top"
                alt = "..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.post.title}</h5>
                    <p className="card-text">{this.props.post.text}</p>
                    <Button id={this.props.match.params.id}/>
                </div>
            </div>
        </div>
        )
    }

    render() {
        return(
            <div>
                {
                    this.props.loading ? <Loader /> : this.renderPostDetails()
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        post: state.post.post,
        loading: state.post.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPostById: id => dispatch(fetchPostById(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);