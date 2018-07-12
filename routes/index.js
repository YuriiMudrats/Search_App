const express = require("express");
const axios = require("axios");


const googleQueriesApi = "http://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q="

const router = express.Router();

const regfordata = '/data/g'

router.get("/queries", (req, res, next)=> {
    const body = req.body ? req.body.queri : "react"
    const url = googleQueriesApi + body
    axios({ url }).then(queries => {
        console.log(queries.data.toString().match(regfordata))
        return res.send(queries.data)
    } )
})

module.exports = router