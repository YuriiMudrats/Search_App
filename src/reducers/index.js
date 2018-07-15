import * as types from "../consts";

const initialState = {
  queries: "",
  suggestions: [],
  links: []
};

export function getGoogle(state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_GOOGLE:
      return { ...state, suggestions: payload };
    case types.INPUT_CHANGE:
      return { ...state, queries: payload };
    case types.CLEARE_SUGGESTIONS:
      return { ...state, suggestions: [] };
    case types.WIKI_TO_STORE:
      return {
        ...state,
        links: payload
      };
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
