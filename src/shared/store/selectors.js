import * as fromReducer from "./reducer";
import { filter } from "lodash";
export const getNews = state => {
  return fromReducer.getData(state.app);
};

export const getNewsById = (state, id) => {
  const news = getNews(state);

  const newsItem = filter(news, item => {
    return item.id === id;
  });

  return newsItem[0];
};
