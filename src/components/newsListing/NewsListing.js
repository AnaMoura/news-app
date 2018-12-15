import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { actions, selectors } from "src/shared/store";
import styles from "./NewsListing.css";
import Router from "next/router";
import NewsItem from "../newsItem";

class NewsListing extends Component {
  static propTypes = {
    fetchNews: PropTypes.func.isRequired,
    newsList: PropTypes.array
  };

  componentDidMount() {
    const { fetchNews } = this.props;
    fetchNews();
  }

  _handleClick = id => {
    Router.push({ pathname: "/details", query: { id: id } });
  };

  render() {
    const { newsList } = this.props;
    const cells = newsList.map((news, index) => (
      <NewsItem data={news} handleClick={this._handleClick} key={index} />
    ));

    return <div className={styles.listing}>{cells}</div>;
  }
}

const mapStateToProps = state => ({
  newsList: selectors.getNews(state)
});

const mapDispatchToProps = {
  fetchNews: actions.fetchNews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsListing);
