import React from "react";
import PropTypes from "prop-types";

const NewsItem = ({ data, handleClick }) => {
  return (
    <div onClick={() => handleClick(data.id)}>
      <img alt="Smiley face" height="100" src={data.urlToImage} width="100" />
      <p>{data.title}</p>
    </div>
  );
};

NewsItem.defaultProps = {
  items: []
};

NewsItem.propTypes = {
  items: PropTypes.array
};

export default NewsItem;
