import React from "react";
import PropTypes from "prop-types";
import styles from "./NewsItem.css";

const NewsItem = ({ data, handleClick }) => {
  return (
    <div className={styles.item} onClick={() => handleClick(data.id)}>
      <img alt="Smiley face" className={styles.image} src={data.urlToImage} />
      <p className={styles.title}>{data.title}</p>
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
