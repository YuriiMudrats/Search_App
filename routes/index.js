const express = require("express");
const axios = require("axios");

const googleApiXMl =
  "http://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=";
const googleApiJson = param =>
  `http://suggestqueries.google.com/complete/search?q=${param}&client=firefox&hl=en`;
const wikiSearch =
  "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&iwurl=1&generator=search&gsrsearch=";

const router = express.Router();

const proxiResp = (req, res, next, options) => {
  const body = req.body ? req.body[options.queries] : "react";
  const googleJson = param =>
    `http://suggestqueries.google.com/complete/search?q=${param}&client=firefox&hl=en`;
  const url =
    typeof options.urlPath === "function"
      ? options.urlPath(body)
      : options.urlPath + body;
  axios({ url }).then(response => {
    res.send(response.data);
  });
};

router.post("/queries", (req, res, next) => {
  proxiResp(req, res, next, {
    queries: "queries",
    urlPath: googleApiJson
  });
});

router.post("/wiki", (req, res, next) => {
  proxiResp(req, res, next, {
    queries: "wiki",
    urlPath: wikiSearch
  });
});

module.exports = router;
