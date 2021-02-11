import { types } from '../types/types'

const initialState = {
  agencies: [],
  active: null,
}

export const agencyReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.agencyActive:
      return {
        ...state,
        active: {
          ...action.payload
        }
      }
    case types.agencyLoad:
      return {
        ...state,
        agencies: [...action.payload]
      }
    case types.agencyClean: 
      return {
        ...state,
        active: null,
      }    
    default:
      return state;
  }
}