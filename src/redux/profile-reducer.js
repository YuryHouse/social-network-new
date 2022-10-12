import {usersAPI, profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, like: 7, message: 'Hi, how are you?'},
        {id: 2, like: 9, message: 'It\'s my first post'}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                like: 0,
                message: action.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state, status: action.status
            };
        default:
            return state;
    }
}
export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const getUserProfile = (userId) => (dispatch) => {
    return usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};
export const getStatus = (userId) => (dispatch) => {
    return profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
};

export const updateStatus = (status) => (dispatch) => {
    return profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

export default profileReducer;

