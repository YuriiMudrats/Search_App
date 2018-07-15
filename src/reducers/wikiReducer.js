import * as types from '../constants/actionTypes';

const initialState = {
  pending: false,
  links: [],
  notFound: false
};

export default function getGoogle(state = initialState, { type, payload }) {
  switch (type) {
    case types.WIKI_PENDING:
      return { ...state, links: [], pending: true, notFound: false };
    case types.WIKI_FULFILLED:
      return {
        ...state,
        pending: false,
        links: payload
      };
    case types.WIKI_NOTFOUND:
      return { ...state, pending: false, notFound: true };
    default:
      return state;
  }
}
