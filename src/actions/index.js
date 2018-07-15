import {
  GET_GOOGLE,
  INPUT_CHANGE,
  SUGGEST_TO_STORE,
  CLEAR_SUGGESTIONS,
  WIKI_PENDING,
  WIKI_FULFILLED,
  WIKI_NOTFOUND,
  CLICK_SUGGESTION
} from '../constants/actionTypes';

export function getGoogle(payload) {
  return {
    type: GET_GOOGLE,
    payload
  };
}

export function inputChange(payload) {
  return {
    type: INPUT_CHANGE,
    payload
  };
}
export function sugToStore(payload) {
  return {
    type: SUGGEST_TO_STORE,
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

    axios.post('/wiki', { wiki }).then(res => {
      if (!res.data.query) {
        return dispatch({ type: WIKI_NOTFOUND });
      }

      const wikiPages = res.data.query.pages;
      const result = Object.keys(wikiPages).reduce((articlesArray, article) => {
        const reactArticle = {
          extract: wikiPages[article].extract,
          id: wikiPages[article].pageid,
          title: wikiPages[article].title
        };
        articlesArray.push(reactArticle);
        return articlesArray;
      }, []);
      dispatch(wikiToStore(result));
    });
    dispatch(clearSuggestions());
  };
}
export function getSuggestion(payload) {
  return (dispatch, getState, axios) => {
    axios.post('/queries', { queries: payload })
      .then(res => {
        dispatch(getGoogle(res.data[1]));
      })
  };
}
