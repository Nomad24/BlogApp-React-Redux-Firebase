import React, {Component} from "react";
import Post from "./post";
import Loader from "./loader";
import {connect} from "react-redux";
import {fetchPosts} from "../../src/store/actions/post";


class PostList extends Component {

    
    renderPosts() {
    return this.props.posts.map((post, index) => {
        return (
            <Post 
            key = {index}
            title = {post.title}
            text = {post.text}
            id = {post.id}
            />
        )
    })
}

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return( 
            <div>
                <h1>Posts</h1>
                    {
                        this.props.loading  ? <Loader /> :  this.renderPosts() 
                    }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.post.posts,
        loading: state.post.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);