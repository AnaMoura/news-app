import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectors } from "src/shared/store";
import styles from "./NewsCard.css";

class NewsListing extends Component {
  static propTypes = {
    newsItem: PropTypes.func.isRequired
  };

  render() {
    const { newsItem } = this.props;
    return (
      <React.Fragment>
        <h2> {newsItem.title} </h2>
        <p> {newsItem.author}</p>
        <p> {newsItem.publishedAt}</p>
        <img
          alt="Smiley face"
          className={styles.image}
          height="420"
          src={newsItem.urlToImage}
          width="420"
        />
        <p> {newsItem.content} </p>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => ({
  newsItem: selectors.getNewsById(state, props.id)
});

export default connect(
  mapStateToProps,
  null
)(NewsListing);
