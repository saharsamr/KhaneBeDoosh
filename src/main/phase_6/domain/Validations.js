
function isNumber(num) {
    var value = parseInt(num);
    if(!isNaN(value)){
        return (value >= 0);
    }
    return false;
}

functions = {
    searchParamsValidation: function(buildingType, dealType, area, price){
        var deal = (dealType === '0' || dealType === '1');
        var area_ = isNumber(area);
        var price_ = isNumber(price);
        return (deal && area_ && price_);
    },

    increseCreditValidation: function(value){
        return isNumber(value);
    },

};

module.exports = functions;