function errorHandler(err, req,res,next){
    res.status(422).send({
        error: err.message
    })
};

module.exports = errorHandler;