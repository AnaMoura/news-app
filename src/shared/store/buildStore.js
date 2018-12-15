import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import appReducer from "./reducer";

export default function buildStore(clients, initialState) {
  const reducer = combineReducers({
    app: appReducer
  });

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );

  return store;
}
