import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getGoogle } from "../reducers";
import axios from "axios";
import thunk from "redux-thunk";

export const store = createStore(
  getGoogle,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axios)))
);
