var Users = require('./../../models/users');

functions = {
    getBalance: async function(req, res) {
        let userData;
        await Users.findOne({
            where: {
                id: "1"
            }
        }).then(function (data) {
            userData = data;
        });
        res.json(userData);
    },
};

module.exports = functions;