const Store = require('../Models/Store');
const Samsung = require('../Models/Samsung');
const { muptipMongoose } = require('../../until/mongoose')
    //const { Mongoose } = require('../../until/mongoose')
class siteController {
    home(req, res, next) {

        // 
        // Store.find({})
        // .lean()
        //     .then(stores => res.render('home', { stores }))
        //     .catch(next)


        Promise.all([Store.find({}), Samsung.find({})])
            .then(([stores, samsungs]) =>
                res.render('home', {
                    stores: muptipMongoose(stores),
                    samsungs: muptipMongoose(samsungs)
                })
            )
            .catch(next);

    }
    register(req, res, next) {
        res.render('user/register')
    }
}
module.exports = new siteController();