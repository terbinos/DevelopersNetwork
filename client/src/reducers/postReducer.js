import { GET_POST, GET_POSTS, POST_LOADING, ADD_POST,DELETE_POST } from '../actions/types';

const initialState = {
    post: {},
    posts: [],
    loading: false,
}

export default function(state= initialState, action){
    switch(action.type){
        case POST_LOADING: 
            return { 
                ...state,
                loading: true
            };
        case GET_POSTS: 
            return { 
                ...state,
                posts: action.payload,
                loading: false
            };
        case GET_POST: 
            return { 
                ...state,
                post: action.payload,
                loading: false
            };  
        case ADD_POST: 
            return { 
                ...state,
                posts: [action.payload, ...state.posts]
            };
        case DELETE_POST: 
            return { 
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload)
            };    
        // case GET_PROFILE:
        //     return {
        //         ...state,
        //         profile: action.payload,
        //         loading: false 
        //     };
        // case GET_PROFILES:
        //     return {
        //         ...state,
        //         profiles: action.payload,
        //         loading: false 
        //     };    
        // case CLEAR_CURRENT_PROFILE:
        //     return {
        //         ...state,
        //         profile: null
        //     };    
        default: 
            return state;
    }
}