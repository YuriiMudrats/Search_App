import * as types from '../constants/actionTypes';

const initialState = {
  pending: false,
  suggestions: [],
  error: false
};

export default function googleSuggestion(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case types.GET_GOOGLE_PENDING:
      return { ...state, pending: true, error: false };
    case types.GET_GOOGLE_FULFILLED:
      return { ...state, suggestions: payload, pending: false };
    case types.GET_GOOGLE_REJECTED:
      return { ...state, error: true };

    case types.CLEAR_SUGGESTIONS:
      return { ...state, suggestions: [] };
    default:
      return state;
  }
}
