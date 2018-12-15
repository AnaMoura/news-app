import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectors } from "src/shared/store";

class NewsListing extends Component {
  static propTypes = {
    newsItem: PropTypes.func.isRequired
  };

  render() {
    const { newsItem } = this.props;
    return (
      <div>
        <h2> {newsItem.title} </h2>
        <p> {newsItem.author}</p>
        <p> {newsItem.publishedAt}</p>
        <img
          alt="Smiley face"
          height="420"
          src={newsItem.urlToImage}
          width="420"
        />
        <p> {newsItem.content} </p>
      </div>
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
