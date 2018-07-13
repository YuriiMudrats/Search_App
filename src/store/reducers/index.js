import * as types from "../consts";

const initialState = {
  queries: "",
  suggestins: [],
  links: null
};

export function getGoogle(state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_GOOGLE:
      return { ...state, suggestins: payload };
    case types.INPUT_CHANGE:
      return { ...state, queries: payload };
    case types.CLEARE_SUGGESTIONS:
      return { ...state, suggestins: [] };
    case types.WIKI_TO_STORE:
      return {
        ...state,
        links: payload
      };
    default:
      return state;
  }
}
