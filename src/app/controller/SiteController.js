const Store = require('../Models/Store');
class siteController {
    home(req, res, next) {
        Store.find({})
            .lean()
            .then(Stores => res.json(Stores))
    }
}
module.exports = new siteController();