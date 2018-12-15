const response = require("../responses/newsListing.json");

module.exports = app => {
  app.get("/api/news", (req, res) => res.json(response));
};
