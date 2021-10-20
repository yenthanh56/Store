const Store = require('../Models/Store');
const Samsung = require('../Models/Samsung');
//const { muptipMongoose } = require('../../until/mongoose')
const { Mongoose } = require('../../until/mongoose')
class telephoneController {


    slug(req, res, next) {
        Promise.all([Store.findOne({ slug: req.params.slug }), Samsung.findOne({ slug: req.params.slug })])
            .then(([stores, samsungs]) =>
                res.render('details/item', {
                    stores: Mongoose(stores),
                    samsungs: Mongoose(samsungs)
                })
            )
            .catch(next);
    }
    create(req, res, next) {
        res.render('details/create')
    }
    store(req, res, next) {
        res.json(req.body)
    }

}
module.exports = new telephoneController();