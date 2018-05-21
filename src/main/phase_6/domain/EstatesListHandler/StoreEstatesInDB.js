const fetch = require('node-fetch');
let Estates = require('./../../models/estates');

var expireTime = Math.floor(Date.now());

var timerObject = setTimeout(async function getHousesList() {
    let response = await fetch('http://139.59.151.5:6664/khaneBeDoosh/v2/house');
    let jsonRes = await response.json();
    let dataArray = await jsonRes.data;
    expireTime = await  jsonRes.expireTime;

    Estates.destroy({
        where: {},
        truncate: true
    });

    dataArray.forEach(function(record) {
        let price = record.price;
        let sellPrice = (record.dealType) ? 0 : price.sellPrice;
        let basePrice = (record.dealType) ? price.basePrice : 0;
        let rentPrice = (record.dealType) ? price.rentPrice : 0;
        let buildingType = (record.buildingType === 'ویلایی') ? 0 : 1;
        Estates.create({id: record.id, area: record.area,
            sellPrice: sellPrice, basePrice: basePrice, rentPrice: rentPrice,
            dealType: record.dealType, buildingType: buildingType,
            address: record.address, imageURL: record.imageURL, phone: record.phone
        });
    });

    console.log("Estates instances saved successfully.");
}, expireTime - Math.floor(Date.now()));



module.exports = timerObject;