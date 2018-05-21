const fetch = require('node-fetch');

async function getEstateDetail(req, res) {
    var eid = req.query.id;
    let response = await fetch("http://139.59.151.5:6664/khaneBeDoosh/v2/house/"+eid);
    let jsonRes = await response.json();
    jsonRes = await jsonRes.data;
    res.json(jsonRes);
}

module.exports = getEstateDetail;