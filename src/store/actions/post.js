import axios from "axios";
import {FETCH_POSTS_START, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR, FETCH_POST_SUCCESS} from "./actiontypes"

export function fetchPosts(){
    return async dispatch => {
        dispatch(fetchPostsStart())
        try {
            const response = await axios.get("https://********.firebaseio.com/posts.json")

            const posts = [];
            Object.keys(response.data).forEach((key) => {
                const item = response.data[key];
                item.id = key;
                posts.push(item);
            })
            
            dispatch(fetchPostsSuccess(posts))
        } catch (error) {
            dispatch(fetchPostsError(error))
        }
    }
}

export function fetchPostById(post_id) {
    return async dispatch => {
        dispatch(fetchPostsStart())

        try {
            const response = await axios.get(`https://********.firebaseio.com/posts/${post_id}.json`)
            const post = response.data;
            dispatch(fetchPostSuccess(post));
        } catch (e) {
            dispatch(fetchPostsError(e));
        }
    }
}

export function fetchPostsStart() {
    return {
        type: FETCH_POSTS_START
    }
}

export function fetchPostsSuccess(posts) {
    return {
        type: FETCH_POSTS_SUCCESS,
        posts
    }
}

export function fetchPostSuccess(post) {
    return {
        type: FETCH_POST_SUCCESS,
        post
    }
}

export function fetchPostsError(error){
    return {
        type: FETCH_POSTS_ERROR,
        error: error
    }
}