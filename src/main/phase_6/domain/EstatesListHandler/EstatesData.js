var Estates = require('./../../models/estates');

functions = {
    getPhone: async function (id) {
        let phone;
        estateData = await Estates.findById(id)
            .then(function (record) {
                phone = record.toJSON().phone;
            });
        return phone;
    },
};

module.exports = functions;