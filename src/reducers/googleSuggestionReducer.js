import * as types from "../constants/actionTypes";

const initialState = {
  suggestions: []
};

export default function googleSuggestion(state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_GOOGLE:
      return { ...state, suggestions: payload };

    case types.CLEAR_SUGGESTIONS:
      return { ...state, suggestions: [] };
    default:
      return state;
  }
}
