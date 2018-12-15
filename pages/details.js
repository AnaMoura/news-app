import React, { Component } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import NewsCard from "src/components/newsCard";

class NewsListing extends Component {
  static getInitialProps({ query: { id } }) {
    return { id };
  }

  render() {
    return (
      <div>
        <NewsCard id={this.props.id} />
      </div>
    );
  }
}

export default NewsListing;
