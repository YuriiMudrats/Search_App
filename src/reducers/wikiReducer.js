import * as types from '../constants/actionTypes';

const initialState = {
  pending: false,
  links: [],
  notFound: false,
  error: false,
};

export default function getGoogle(state = initialState, { type, payload }) {
  switch (type) {
    case types.WIKI_PENDING:
      return { ...state, links: [], pending: true, notFound: false, error: false };
    case types.WIKI_FULFILLED:
      return {
        ...state,
        pending: false,
        links: payload
      };
    case types.WIKI_NOTFOUND:
      return { ...state, pending: false, notFound: true };
    case types.WIKI_REJECTED:
      return { ...state, pending: false, error: true };
    default:
      return state;
  }
}
