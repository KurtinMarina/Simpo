function errorResponse(res, e){
    console.error(e);
    e = e || {};
    return res.status(e.status || 500).send({success: false, message: e.message || "Oops something wrong"});
}

module.exports = Object.freeze({
    errorResponse
});