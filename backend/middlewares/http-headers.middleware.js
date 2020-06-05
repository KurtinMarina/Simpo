
function preventCache(req, res, next) {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate'); // https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9
    res.setHeader('Pragma', 'no-cache'); // https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.32
    res.setHeader('Expires', '0'); // https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21

    next();
}

function cors(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
}

module.exports = Object.freeze({
   cors, preventCache
});