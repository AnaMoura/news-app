const axios = require("axios");

export const fetchNews = () => async dispatch => {
  dispatch({ type: "NEWS_FETCH_START" });

  axios
    .get("/api/news")
    .then(function(response) {
      dispatch({ payload: response.data, type: "NEWS_FETCH_SUCCESS" });
    })
    .catch(function(error) {
      dispatch({ payload: error, type: "NEWS_FETCH_ERROR" });
    });
};
