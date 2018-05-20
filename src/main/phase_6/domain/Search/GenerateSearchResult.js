var Estates = require('./../../models/estates');

async function generateSearchResult(req, res) {

    let buildingType = (req.query.buildingType === 'ویلایی') ? 0 : 1;
    let area = req.query.area;
    let price = req.query.price;
    let dealType = req.query.dealType;
    let result;

    let searchResult = await ((dealType) ?
        Estates.findAll({
            where: {
                buildingType: buildingType,
                dealType: dealType,
                area: {$gte: area},
                basePrice: {$lte: price}
            }
        })
            :
        await Estates.findAll({
            where: {
                buildingType: buildingType,
                dealType: dealType,
                area: {$gte: area},
                sellPrice: {$lte: price}
            }
        })).then(function(data){
        result = JSON.stringify(data);
    });

    res.json(result);
}

module.exports = generateSearchResult;