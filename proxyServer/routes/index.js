const express = require("express");
const axios = require("axios");

const googleApiXMl =
  "http://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=";
const googleApiJson = param =>
  `http://suggestqueries.google.com/complete/search?q=${param}&client=firefox&hl=en`;
const wikiSearch =
  "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";


const router = express.Router();

const proxiResp = (req, res, next, options) => {
  const { queries, urlPath, isWiki } = options
  const body = req.body ? req.body[queries] : "";
  const url =
    typeof urlPath === "function"
      ? urlPath(body) : urlPath + body
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
    urlPath: wikiSearch,
  });
});

module.exports = router;
