import * as types from "../constants/actionTypes";

const initialState = {
  queries: ""
};

export default function searchInputReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.INPUT_CHANGE:
      return { ...state, queries: payload };
     case types.CLICK_SUGGESTION: {
       return {
         ...state,
         queries: payload
       }
     }
    default:
      return state;
  }
}
