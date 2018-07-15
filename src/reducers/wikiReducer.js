import * as types from "../constants/actionTypes";

const initialState = {
  links: []
};

export default function getGoogle(state = initialState, { type, payload }) {
  switch (type) {
    case types.WIKI_TO_STORE:
      return {
        ...state,
        links: payload
      };
    default:
      return state;
  }
}