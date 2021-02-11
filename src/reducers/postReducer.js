import { types } from '../types/types'

const initialState = {
  posts: [],
  active: null,
}

export const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.postsActive:
      return {
        ...state,
        active: {
          ...action.payload
        }
      }
    case types.postsNew:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      }
    case types.postsLoad:
      return {
        ...state,
        posts: [...action.payload]
      }
    case types.postsUpdate:
      return {
        ...state,
        posts: state.posts.map(
          post => post.id === action.payload.id ?
            action.payload.post :
            post
        )
      }
    case types.postsDelete:
      return {
        ...state,
        active: null,
        posts: state.posts.filter(
          post => post.id !== action.payload
        )
      }
    case types.postsLogout:
      return {
        ...state,
        active: null,
        posts: [],
      }
    default:
      return state;
  }
}