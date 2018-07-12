const express = require("express");
const router = require("./routes/index");
const ngrok = require("ngrok");

const app = express()


const PORT = process.env.PORT ||  8000;

app.use(router)



app.listen(PORT, async err => {

});

