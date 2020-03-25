import React, {Component} from "react";
import "../styles/app.css";
import axios from "axios";


class PostCreate extends Component {

    state = {
        title: '',
        text: '',
        url: ''
    }

    getValue = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({
            [nam]: val
        })
    }

    clearState = () => {
        this.title.value = "";
        this.text.value = "";
        this.url.value = "";
    }



    postHandler = (e) => {
        e.preventDefault();
        if(this.props.match.url == "/post-create") {
            try {
                axios.post("https://blog-app-34387.firebaseio.com/posts.json", this.state)
                    .then(function () {
                        location.assign("/");
                    })
                this.clearState();
            } catch (error) {
                console.log(error);
            }
        }  
    }



    render() {
        
        let post;

        if(this.props.match.url == "/post-create") {
            post = (
                <div className="container PostCreate">
                            <div>
                                <h1>Create Post</h1>
                            <form onSubmit={(e) => this.postHandler(e)} className="PostForm">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Title</label>
                                    <input required name="title" ref={(e) => this.title = e} onChange={(e) => this.getValue(e)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="some title ..."></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Text</label>
                                    <input required name="text" ref={(e) => this.text = e} onChange={(e) => this.getValue(e)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="some text ..."></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Image URL</label>
                                    <input required name="url" ref={(e) => this.url = e} onChange={(e) => this.getValue(e)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Url"></input>
                                </div>
                                <button className="btn btn-primary" type="submit">Create Post</button>
                            </form>
                            </div>
                </div>
            )
        }

        return (
            <div>{post}</div>
        )
    }
}


export default PostCreate;