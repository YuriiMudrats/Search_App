import {
  GET_GOOGLE_PENDING,
  GET_GOOGLE_FULFILLED,
  GET_GOOGLE_REJECTED,
  INPUT_CHANGE,
  CLEAR_SUGGESTIONS,
  WIKI_PENDING,
  WIKI_FULFILLED,
  WIKI_NOTFOUND,
  WIKI_REJECTED,
  CLICK_SUGGESTION
} from '../constants/actionTypes';

export function getGoogle(payload) {
  return {
    type: GET_GOOGLE_FULFILLED,
    payload
  };
}

export function inputChange(payload) {
  return {
    type: INPUT_CHANGE,
    payload
  };
}

export function clearSuggestions() {
  return { type: CLEAR_SUGGESTIONS };
}
export function wikiToStore(payload) {
  return {
    type: WIKI_FULFILLED,
    payload
  };
}
export function chooseSuggestion(payload) {
  return {
    type: CLICK_SUGGESTION,
    payload
  };
}

export function changeOrder() {
  return (dispatch, getState, axios) => {
    const wiki = getState().searchInput.queries;

    dispatch({ type: WIKI_PENDING });
    dispatch(clearSuggestions());

    axios
      .post('/wiki', { wiki })
      .then(res => {
        if (!res.data.query) {
          return dispatch({ type: WIKI_NOTFOUND });
        }

        const wikiPages = res.data.query.pages;
        const result = Object.keys(wikiPages).reduce(
          (articlesArray, article) => {
            const reactArticle = {
              extract: wikiPages[article].extract,
              id: wikiPages[article].pageid,
              title: wikiPages[article].title
            };
            articlesArray.push(reactArticle);
            return articlesArray;
          },
          []
        );
        dispatch(wikiToStore(result));
      })
      .catch(() => {
        dispatch({ type: WIKI_REJECTED });
      });
  };
}
export function getSuggestion(payload) {
  return (dispatch, getState, axios) => {
    dispatch({ type: GET_GOOGLE_PENDING });
    axios
      .post('/queries', { queries: payload })
      .then(res => {
        if (!res.data.length || res.data.length < 2) {
          throw new Error('Invalid response');
        }
        dispatch(getGoogle(res.data[1]));
      })
      .catch(() => {
        dispatch({ type: GET_GOOGLE_REJECTED });
      });
  };
}
