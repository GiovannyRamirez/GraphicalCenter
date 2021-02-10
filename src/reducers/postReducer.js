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
    case types.postsLoad:
      return {
        ...state,
        posts: [...action.payload]
      }
    default:
      return state;
  }
}