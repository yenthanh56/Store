const Store = require('../Models/Store');
//const Samsung = require('../Models/Samsung')
class siteController {
    home(req, res, next) {
        Store.find({})

        .lean()
            .then(stores => res.render('home', { stores }))
            .catch(next)
    }

    slug(req, res, next) {
        Store.findOne({ slug: req.params.slug })
            .lean()
            .then(stores => res.render('details/item'))
            .catch(next)
    }
}
module.exports = new siteController();