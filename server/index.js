const express = require("express");
const createNextServer = require("next");
const routes = require("./routes");

module.exports = async () => {
  const dev = process.env.NODE_ENV !== "production";
  const app = express();
  const next = createNextServer({ dev });

  await next.prepare();

  app.use(routes());
  app.use(next.getRequestHandler());

  return app;
};
