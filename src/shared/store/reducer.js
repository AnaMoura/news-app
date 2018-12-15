import { combineReducers } from "redux";
import { get } from "lodash";

export const initialState = {
  data: [],
  error: null,
  isLoading: false
};

export const isLoading = (state = initialState.isLoading, action = {}) => {
  switch (action.type) {
    case "NEWS_FETCH_START":
      return true;
    case "NEWS_FETCH_SUCCESS":
    case "NEWS_FETCH_FAIL":
      return false;
    default:
      return state;
  }
};

export const data = (state = initialState.data, action = {}) => {
  switch (action.type) {
    case "NEWS_FETCH_START":
    case "NEWS_FETCH_FAIL":
      return state;
    case "NEWS_FETCH_SUCCESS":
      return get(action, "payload.entries", []);
    default:
      return state;
  }
};

export const error = (state = initialState.error, action = {}) => {
  switch (action.type) {
    case "NEWS_FETCH_FAIL":
      return get(action, "payload.error", initialState.error);
    case "NEWS_FETCH_START":
    case "NEWS_FETCH_SUCCESS":
      return error();
    default:
      return state;
  }
};

export const getData = state => get(state, "data", initialState.data);
export const getLoadingStatus = state =>
  get(state, "isLoading", initialState.isLoading);
export const getError = state => get(state, "error", initialState.error);

export default combineReducers({
  data,
  error,
  isLoading
});
