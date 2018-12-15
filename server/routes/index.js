const { Router } = require("express");
const news = require("./news");

module.exports = () => {
  const router = Router();
  news(router);
  return router;
};
