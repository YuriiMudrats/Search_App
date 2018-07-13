const express = require("express");
const webpack = require("webpack");
const path = require("path");
const cors = require("cors");
const webpackMiddleware = require("webpack-dev-middleware");
const bodyParser = require("body-parser");
const router = require("./routes");
const webpackConfig = require("./webpack.config.dev");

const app = express();
const compiler = webpack(webpackConfig);
const PORT = 8000;

app.use(
  webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  })
);

app.use(bodyParser.json());
app.use(router);
app.use(cors());

app.get("/*", (req, res) => {
  console.log(path.join(__dirname, "./public/index.html"));
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(
  PORT,
  console.log(`proxy development server is running on PORT-${PORT}`)
);
