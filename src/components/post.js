import React from "react";
import  "../styles/app.css";
import {NavLink} from "react-router-dom";


const Post = (props) => {
    return (
        <div className="Post">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <NavLink to={"/posts/" + props.id} className="card-link">
                    Details
                    </NavLink>
                </div>
            </div>
        </div>
    )
}


export default Post;